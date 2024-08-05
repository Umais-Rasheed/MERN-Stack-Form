const express = require('express');
const app = express();
app.use(express.json());

// CORS middleware is used here to allow cross-origin requests from the frontend.
const cors = require('cors');
app.use(cors());

require('./db/connection');
const User = require('./Models/User');

app.post("/", async(req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
	// console.log("port Run");
})
   

app.listen(4000, () => {
	console.log("app is running");

})