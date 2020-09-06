//bring in mongoose
const mongoose = require("mongoose");

//bring in db parameters
const { dbURI } = require("./config");

connectServer = (cb) =>{
  mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    cb()
  );
}

module.exports = connectServer;
