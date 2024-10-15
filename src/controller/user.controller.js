

const User = require("../model/user.model");

const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try{
    const user = new User({ firstName, lastName, email });
    await user.save();
    
    if (!user){
      return res.status(400).json({message: "User not created"})
    }

    return res.status(201).json({message: "User created successfully", user})
  } catch (error) {
    res.status(500).json({message: "An error occured"});
  }
}

const getAllUsers = async (req, res) => {
  // const users = [
  //   { name: "Ola", age: 25, email: "olisraeliri@gmail.com"},
  //   { name: "Bob", age: 30, email: "bobemmauel@gmail.com" },
  // ];
  // res.json(users);

  try{
    const users = await User.find();

    return res.status(200).json({message: "All users", users});
  }catch (error){
    return res.status(500).json({message: "An error occured"});
  }
}

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try{
    const user = await User.findById(id);
    if (!user){
      return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({message: "User found", user}); 
  }catch (error){
    return res.status(500).json({message: "An error occured"});
  }
}


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred", error });
  }
}

module.exports = { createUser, getAllUsers, getSingleUser, deleteUser };