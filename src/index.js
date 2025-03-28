const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/getAllCurrency",async (req, res) => {
    const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=fb552cb116fb4ec8a530b81c81ee5083`
    try{
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;

        return res.json({nameData});
    }
    catch(err){
        console.error(err);
    }
})

//listen to a port
app.listen(9000 , () => {
    console.log("hello!")
})
