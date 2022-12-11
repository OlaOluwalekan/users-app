const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  pin: {
    type: Number,
    required: false,
    trim: true,
    maxlength: [8, "maximum pin length is 8 characters"],
    minlength: [4, "minimum pin length is 4 characters"],
  },
});

module.exports = mongoose.model("User", userSchema);
