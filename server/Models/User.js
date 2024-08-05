const mongoose = require('mongoose');

// creates a Mongoose schema
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String
});

// Create and export the model for interacting with the 'users' collection
module.exports = mongoose.model("users",userSchema);