const mongoose  = require("mongoose");


const userSchema = new mongoose.Schema({
    username : String,
    img : Array,
    email : String,
    Password : String,
})

const user = mongoose.model("user",userSchema)

module.exports = user;