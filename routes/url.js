const express = require("express");
const { nanoid } = require("nanoid");
const Url = require("../models/Url");
const router = express.Router();

router.post("/" , async (req , res) => {
    const body = req.body;
    const newUrl = new Url({
        shortId : nanoid(10) , actualUrl : body.url , clicks : 0 , author : req.user.id
    })
    const result = await Url.create(newUrl);
    return res.render("home" , {
        shortId : result.shortId ,
        actualUrl : result.actualUrl
    });
})

router.get("/:id" , async (req , res) => {
    const redirectUrl = req.params.id;
    const result = await Url.findOne({ shortId : redirectUrl });
    const updateResult = await Url.findOneAndUpdate({ shortId : redirectUrl } , { clicks : result.clicks + 1 });
    //return res.status(301).redirect(result.actualUrl);
    return res.status(200).json({ success : result.actualUrl });
})

router.get("/analytics/:id" , async (req , res) => {
    const redirectUrl = req.params.id;
    const result = await Url.findOne({ shortId : redirectUrl });
    return res.status(200).json({ clicks : result.clicks });
})

module.exports = router;