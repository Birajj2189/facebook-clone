const user = require("../models/user");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Its user route")
})

// Update a user
router.put("/:id", async (req, res) => {
    try {
        // Check if the request's user ID matches the user being updated or the user is an admin
        if (req.body.userId === req.params.id || req.body.isAdmin) {
            if (req.body.password) {
                try {
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                } catch (error) {
                    return res.status(500).json(error);
                }
            }
            try {
                const updatedUser = await user.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
                res.status(200).json("Account has been updated");
            } catch (err) {
                return res.status(403).json(err);
            }
        } else {
            res.status(403).json("You can only update your own account.");
        }
    } catch (error) {
        res.status(500).json("Error updating user: " + error.message);
    }
});

// delete a user
router.delete("/:id", async (req, res) => {
    try {
        // Check if the request's user ID matches the user being updated or the user is an admin
        if (req.body.userId === req.params.id || req.body.isAdmin) {
            try {
                const User = await user.findByIdAndDelete(req.params.id);
                res.status(200).json("Account has been deleted");
            } catch (err) {
                return res.status(403).json(err);
            }
        } else {
            res.status(403).json("You can only delete your own account.");
        }
    } catch (error) {
        res.status(500).json("Error updating user: " + error.message);
    }
});

// get a user
router.get("/:id", async (req, res) => {
    try {
        const foundUser = await user.findById(req.params.id);
        if (foundUser) {
            const {password,updatedAt, ...other} = foundUser._doc;
            res.status(200).json(other);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json( error.message);
    }
});


// send friend request
router.put("/:id/send-friend-request", async (req, res) => {
    try {
        const sender = await user.findById(req.params.id);
        const recipientId = req.body.userId;

        if (!sender) {
            return res.status(404).json({ message: "User not found" });
        }

        if (sender.friends.includes(recipientId)) {
            return res.status(400).json({ message: "Already friends with this user" });
        }

        if (sender.friendRequested.includes(recipientId)) {
            return res.status(400).json({ message: "Friend request already sent" });
        }

        // Update the arrays in the database
        const updateSender = await user.findOneAndUpdate(
            { _id: sender._id },
            { $push: { friendRequested: recipientId } }
        );

        const recipient = await user.findById(recipientId);
        if (!recipient) {
            return res.status(404).json({ message: "Recipient user not found" });
        }

        const updateRecipient = await user.findOneAndUpdate(
            { _id: recipient._id },
            { $push: { friendRequests: sender._id } }
        );

        if (updateSender && updateRecipient) {
            res.status(200).json({ message: "Friend request sent" });
        } else {
            res.status(500).json({ message: "Failed to send friend request" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// show friend requests
router.get("/:id/friend-requests", async (req, res) => {
    try {
        const foundUser = await user.findById(req.params.id);

        if (!foundUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (foundUser.friendRequests.length === 0) {
            return res.status(200).json({ message: "No friend requests received" });
        }

        const friendRequests = await user.find({ _id: { $in: foundUser.friendRequests } });

        // Refine the response data to include only necessary fields
        const refinedFriendRequests = friendRequests.map((user) => {
            return {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                // Add more fields as needed
            };
        });

        res.status(200).json(refinedFriendRequests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Show Friend Requests Sent
router.get("/:id/friend-requested", async (req, res) => {
    try {
        const foundUser = await user.findById(req.params.id);

        if (!foundUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (foundUser.friendRequested.length === 0) {
            return res.status(200).json({ message: "No friend requests sent" });
        }

        const friendRequested = await user.find({ _id: { $in: foundUser.friendRequested } });

        // Refine the response data to include only necessary fields
        const refinedFriendRequested = friendRequested.map((user) => {
            return {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                // Add more fields as needed
            };
        });

        res.status(200).json(refinedFriendRequested);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Show All Friends
router.get("/:id/friends", async (req, res) => {
    try {
        const foundUser = await user.findById(req.params.id);

        if (!foundUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (foundUser.friends.length === 0) {
            return res.status(200).json({ message: "No friends in the friend list" });
        }

        const friends = await user.find({ _id: { $in: foundUser.friends} });

        // Refine the response data to include only necessary fields
        const refinedFriends = friends.map((user) => {
            return {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                // Add more fields as needed
            };
        });

        res.status(200).json(refinedFriends);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// delete a friend
router.delete("/:id/delete-friend/:userId", async (req, res) => {
    try {
        const currentUser = await user.findById(req.params.id);
        const friendToRemove = await user.findById(req.params.userId);

        if (!currentUser || !friendToRemove) {
            return res.status(404).json({ message: "User(s) not found" });
        }

        // Remove friendToRemove's _id from currentUser's friends array
        currentUser.friends = currentUser.friends.filter(friendId => friendId.toString() !== req.params.userId);
        await currentUser.save();

        // Remove currentUser's _id from friendToRemove's friends array
        friendToRemove.friends = friendToRemove.friends.filter(friendId => friendId.toString() !== req.params.id);
        await friendToRemove.save();

        res.status(200).json({ message: "Friend removed successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Accept a friend request
router.put("/:id/accept-friend/:userId", async (req, res) => {
    try {
        const currentUser = await user.findById(req.params.id);
        const friendToAccept = await user.findById(req.params.userId);

        if (!currentUser || !friendToAccept) {
            return res.status(404).json({ message: "User(s) not found" });
        }

        // Check if friendToAccept is in currentUser's friendRequests
        if (currentUser.friendRequests.includes(req.params.userId)) {
            // Remove friendToAccept's _id from currentUser's friendRequests
            currentUser.friendRequests = currentUser.friendRequests.filter(requestId => requestId.toString() !== req.params.userId);
            currentUser.friends.push(req.params.userId);
            await currentUser.save();

            // Add currentUser's _id to friendToAccept's friends
            friendToAccept.friends.push(currentUser._id);
            await friendToAccept.save();

            res.status(200).json({ message: "Friend request accepted successfully" });
        } else {
            res.status(400).json({ message: "No friend request from this user" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router