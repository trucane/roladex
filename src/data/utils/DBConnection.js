const mongoose = require("mongoose");
const { dbURI } = require("./config");

function connectServer(cb) {
  mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    cb()
  );
}

module.exports = connectServer;
