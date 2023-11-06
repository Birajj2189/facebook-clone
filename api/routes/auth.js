const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        
        // create a new user
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        });
        
        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send("Error registering user: " + error.message);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json("User not found!!");
        }

        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            return res.status(404).json("Wrong Password!!");
        }

        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
