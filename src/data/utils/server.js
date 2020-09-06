const express = require('express');
const server = express();

//create universal database connection
const connectServer = require('./DBConnection')

//require configs 
const {port} = require('./config')

//Require User Routes
const UserRoutes = require('../User/userRoutes');

//base express connection
server.get('/', (req, res) =>{
    res.send('<div>Hitting mongoose server</div>')
})

//connect db with universal connection
connectServer(() =>{ 
    //server to use User Routes
    server.use('/users', UserRoutes)

    server.listen(port, ()=> console.log('Hitting Database Server'))
});
