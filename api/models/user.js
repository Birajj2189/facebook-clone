const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20,
        },
        lastName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20,
        },
        email: {
            type: String,
            required: true,
            maxlength: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        profilePicture: {
            type: String,
            default: ""
        },
        coverPicture: {
            type: String,
            default: ""
        },
        friends: {
            type: Array,
            default: []
        },
        friendRequests: {
            type: Array,
            default: []
        },
        friendRequested: {
            type: Array,
            default: []
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        desc: {
            type:String,
            max: 200,
        },
        city: {
            type:String,
            max: 20,
        },
        state:{
            type:String,
            max: 20,
        },
        relationship: {
            type:Number,
            enum: [1,2,3],
        },
    },
    { timestamps: true } 
); 

module.exports = mongoose.model("User", userSchema);
