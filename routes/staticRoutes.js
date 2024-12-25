const express = require("express");
const Url = require("../models/Url");
const {checkForAuthentication} = require("../middleware/allowAuthUser");
const router = express.Router();

router.get("/" , checkForAuthentication , async (req , res) => {
    const allUrls = await Url.find({ author : req.user.id });

    return res.status(200).render("home" , {
        urls : allUrls
    });
})

router.get("/signup" , async(req , res) => {
    return res.status(200).render("signup");
})

router.get("/login" , async(req , res) => {
    return res.status(200).render("login");
})

module.exports = router;