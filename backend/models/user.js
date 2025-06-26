const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    passwordHash: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    googleId: String,
})

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString(),
        delete returnedObject._id,
        delete returnedObject.__v,
        delete returnedObject.passwordHash
    }
})

const user = mongoose.model("User", userSchema) 

module.exports = user