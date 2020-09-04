const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();


const dbURI = process.env.dbURI;
const port = process.env.PORT || 5000;


mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true}, ()=>{

    server.get('/', (req, res) =>{
        res.send('<div>Hitting mongoose server</div>')
    })
})

server.listen(port, ()=> console.log('Hitting Server'))
