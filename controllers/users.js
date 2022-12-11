const User = require("../models/Users");

const getAllUsers = async (req, res) => {
  // console.log(req.body);
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndDelete({ _id: userID });
    res
      .status(200)
      .json({ response: "success", data: user, message: "user deleted" });
  } catch (error) {
    res.status(500).json({ response: "fail", message: "user not deleted" });
  }
};

const getUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOne({ _id: userID });
    res
      .status(200)
      .json({ response: "success", data: user, message: "user found" });
  } catch (error) {
    res.status(500).json({ response: "fail", message: "user not found" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    });
    res
      .status(200)
      .json({ response: "success", data: user, message: "user updated" });
  } catch (error) {
    res.status(500).json({ response: "fail", message: error });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser,
};
