const express = require("express");
const User = require("../models/User");
const { setUser , getUser } = require("../services/sessionIdToUserMap");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.post("/signup" , async(req , res) => {
    const existingUser = await User.findOne({ email : req.body.email });
    if(existingUser) {
        return res.json({ failed : "user with email already exists" });
    }

    const { name , email , password} = req.body;

    const newUser = await new User({
        name ,
        email ,
        password ,
        role : "NORMAL"
    });

    const authUser = newUser.save();

    const token = setUser(authUser);
    
    res.cookie("authToken" , token);

    return res.redirect("/");
});

router.post("/login" , async(req , res) => {
    const authUser = await User.findOne({ email : req.body.email , password : req.body.password });

    if(!authUser) {
        return res.status(404).json({ failed : "try to login using correct credentials"});
    }

    const token = setUser(authUser);
    
    res.cookie("authToken" , token);
    return res.redirect("/");
});

module.exports = router;