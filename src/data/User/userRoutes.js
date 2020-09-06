const express = require('express');
const Router = express.Router()
Router.use(express.json())

const Users = require('./userModel');




Router.get('/', async (req, res) =>{
    try{
        const data =  await Users.getUsers()
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(403).json({message:'can not find users'})
    }
})





module.exports = Router;