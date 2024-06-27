const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    name:
    {
        type: String,
        required: true,
    },
    gender:
    {
        type: String,
        required: true,
        enum: ["male", "female", "other"],
    },
    profilePicture:
    {
        type: String,
        default:"https://www.pngall.com/wp-content/uploads/5/Profile.png",
    },
},{
    timestamps:true,
});

module.exports = mongoose.model;('User',userSchema);