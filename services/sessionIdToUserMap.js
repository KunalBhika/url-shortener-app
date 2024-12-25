const jwt = require("jsonwebtoken");

const jwtSecret = "KunalBhika1#";

// 1 . Stateful Authentication
// map that contains all users mapped to their session id the get during login.
// const sessionIdToUserMap = new Map();  

// const mapSessionIdToUser = (id , user) => {
//     sessionIdToUserMap.set(id , user);
// }

// const getUserBySessionId = (id) => {
//     return sessionIdToUserMap.get(id);
// }

// module.exports = { mapSessionIdToUser , getUserBySessionId };

// 2. Stateless Authentication

const setUser = (user) => {
    return jwt.sign({
        id: user._id,
        email: user.email
    }, jwtSecret);
}

const getUser = (authToken) => {
    try {
        const user = jwt.verify(authToken, jwtSecret);
        return user;
    } catch (error) {
        return null;
    }
}

module.exports = { setUser , getUser };