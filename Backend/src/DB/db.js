const mongoose = require("mongoose");

function connectDb() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connected to db..");
    })
    .catch((error) => {
      console.log("error in connect to DB.");
    });
}

module.exports = connectDb;
