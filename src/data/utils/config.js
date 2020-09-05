require('dotenv').config();




module.exports = {
    port: process.env.PORT,
    dbName:process.env.DB_NAME,
    dbPassword:process.env.DB_PASSWORD,
    dbUser:process.env.DB_USER,
    dbURI:`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@birthdayclub.jsdmj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
}