const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//listen to a port
app.listen(9000 , () => {
    console.log("hello")
})
