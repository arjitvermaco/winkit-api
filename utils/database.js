const mongoose = require("mongoose");

const uri =
  "mongodb+srv://arjitv:anderomeda@winkit.ybb81hl.mongodb.net/winkit?retryWrites=true&w=majority";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(uri)
      .then(() => {
        console.log("Database connection success");
      })
      .catch((err) => console.error("Database connection error"));
  }
}

module.exports = new Database()