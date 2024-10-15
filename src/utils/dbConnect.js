const mongoose = require('mongoose'); 
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog-api", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};


module.exports = dbConnect;