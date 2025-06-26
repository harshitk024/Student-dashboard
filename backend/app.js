const express = require('express');
const app = express();
const cors = require("cors")
const loginRouter = require('./controllers/login')
const userRouter = require('./controllers/user')
const googleRouter = require('./controllers/googleAuth')
const mongoose = require('mongoose');
const config = require('./utils/config');

mongoose.set('strictQuery', false);

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.use(cors())
app.use(express.json())
app.use("/api/users/login",loginRouter)
app.use("/api/users",userRouter)
app.use("/api/users/google",googleRouter)

module.exports = app;