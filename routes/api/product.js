const express = require('express');
var AsyncRouter = require("express-async-router").AsyncRouter;
var router = AsyncRouter();
const axios = require('axios');
require('dotenv').config()
const { v4: uuidv4 } = require('uuid');
// const router = express.Router();


router.get('/test', async (req, res)  => {
    let request = await axios.get('https://api.github.com/users/janbodnar');
    let nOfFollowers = request.data.followers;
    let location = request.data.location;

    console.log(`# of followers: ${nOfFollowers}`)
    console.log(`Location: ${location}`)
});



router.post('/test/digital-money', async (req, res) => {
    let headers= { 'Content-Type': 'application/json' ,'Authorization': `hello ${token}`  }
    let payload = { 'product_code': 'paket-data-20000', 'phone_number': '081234567890' , 'order_id': uuidv4() , 'amount': '5000' };
    let request = await axios.post(process.env.ENDPOINT+'_partners/collecting-agents/digital-money/transactions', payload, 
        { headers: headers });

    console.log(`# result: ${request.data}`)
    res.send(request.data)
});



module.exports = router;