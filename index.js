const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const {checkForAuthentication , restrictTo} = require("./middleware/allowAuthUser");
const connectToMongo = require("./connectToMongo");

const app = express();
const PORT = 8000;

connectToMongo();

// View engine and views location
app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

// Routes
app.use("/" , require("./routes/staticRoutes"));
app.use("/URL" , checkForAuthentication , require("./routes/url"));
app.use("/auth" , require("./routes/auth"));

app.listen(PORT , () => { console.log(`App listening to port http://localhost:${PORT}`) });