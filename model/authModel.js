const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
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
        enum:["male","female","other"]
    },
    profilePicture:
    {
        type: String,
        default:"https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps="
    }
},{ timestamps: true}
);

module.exports = mongoose.model('User',userSchema);