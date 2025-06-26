const User = require("../models/user")
require("dotenv").config()
const loginRouter = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


loginRouter.post("/", async (request,response) => {

    const {username, password} = request.body

    console.log(`${username} and ${password}`)

    const user = await User.findOne({username})

    const passwordCorrect = user == null
        ? false
        : await bcrypt.compare(password,user.passwordHash)

    console.log(passwordCorrect)
    console.log(user)
    
    if(!(user && passwordCorrect)) {
        return response.status(401).json({
            error: "Invalid username or password"
        })
    }

    const userForToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(userForToken, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 // 24 hours
    })

    console.log("Token generated:", token)

    response.status(200).send({
        token,
        username: user.username,
        name: user.name
    })
        
})

module.exports = loginRouter