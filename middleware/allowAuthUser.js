const { setUser , getUser } = require("../services/sessionIdToUserMap");

const checkForAuthentication = (req , res , next) => {
    const token = req.cookies?.authToken;
    if(!token) return res.redirect("/login");

    const user = getUser(token);
    if(!user) return res.redirect("/login");

    req.user = user;
    return next();
}

const restrictTo = (roles) => {
    return (req , res , next) => {
        if(!roles.includes("ADMIN")) return res.end("Unauthorized");
        return next();
    }
}

module.exports = {checkForAuthentication , restrictTo};