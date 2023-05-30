const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Please add contact name']
  },
  phone:{
    type: String,
    required: [true, 'Please add contact phone number']
  },
  email:{
    type: String,
    required: [true, 'Please add contact email']
  }
},{
    timeStamps: true
})

module.exports = mongoose.model('contact', contactSchema)