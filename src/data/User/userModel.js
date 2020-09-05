const Users = require('./userSchema');

module.exports = {
    getUsers
}

async function getUsers(){
    const users = await Users.find();
    return users
}