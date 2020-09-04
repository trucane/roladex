const express = require('express');
const server = express();


server.get('/', (req, res) =>{
    res.send('<div>Hitting server</div>')
})

server.listen(4000, ()=> console.log('Hitting Server'))
