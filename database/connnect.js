const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("CONNECTED TO THE DB...");
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
