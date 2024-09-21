const express = require('express');
const path = require('path');
const dbConnector = require('./config/database');
const userRoute = require('./routes/userRouter');
const bodyparser = require("body-parser");
const hbs = require("hbs");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3050;

// Middleware

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/css",express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')));
app.use("/js",express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')));
app.use("/jquery",express.static(path.join(__dirname, './node_modules/jquery/dist')));
app.use("/upload",express.static(path.join(__dirname,"./upload")));

app.set("view engine","hbs");
app.set("views",path.join(__dirname,"./views"));

// Routes
app.use("/user",userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbConnector();
});
