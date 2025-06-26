const User = require("../models/user");
const googleAuthRouter = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {OAuth2Client} = require("google-auth-library");


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);



googleAuthRouter.post("/", async (request,response) => {

    const { code } = request.body;

    console.log("Received code:", code);

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

    const tokens = await tokenRes.json()
    console.log("Tokens received:", tokens);

    if(!tokens.id_token) {
        return response.status(400).json({ error: "Invalid Google token" });
    }

    let payload;

    try{

        const ticket = await client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        payload = ticket.getPayload();
    } catch (error) {

        console.error("Error verifying Google token:", error);
        return response.status(400).json({ error: "Invalid Google token" });
    }

    const {sub: googleId,email,name,picture} = payload;
    console.log(payload)

    console.log("Google user data:", {googleId, email, name, picture});

    let user = await User.findOne({googleId})

    console.log(user)

    if(!user){

        user = await User.findOne({email})

        if(user){

            user.googleId = googleId;
            await user.save()

        } else {

            user = new User({
                username: name,
                email,
                googleId,
                profilePicture: picture
            });

            user = await user.save();

            console.log("New user created:", user);

        }
    }

    console.log("User found:", user);

    const userForToken = {
            username: user.username,
            id: user._id
        }
    
        const token = jwt.sign(userForToken, process.env.SECRET, {
            expiresIn: 60 * 60 * 24 // 24 hours
        })

    response.status(200).json({
        token,
        username: user.username,
        name: user.name,
    });
    
    
}) 


module.exports = googleAuthRouter;