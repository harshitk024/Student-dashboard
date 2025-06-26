const User = require("../models/user")
const bcrypt = require("bcrypt")
const userRouter = require("express").Router()


userRouter.get("/", async(request,response) => {

    const users = await User.find({})

    response.json(users)
})


userRouter.post("/create", async (request,response) => {

    const {username,name,email,password,isAdmin} = request.body

    const user = new User({
        username,
        name,
        email,
        passwordHash: await bcrypt.hash(password,10),
        isAdmin: isAdmin || false
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)

})

module.exports = userRouter