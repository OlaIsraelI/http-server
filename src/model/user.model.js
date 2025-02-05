const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName : { 
    type: String,
    required: true,
  },
  lastName: { 
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
  },
},
  {timestamps: true}      
);


const users = mongoose.model('User', userSchema);

module.exports = users; 