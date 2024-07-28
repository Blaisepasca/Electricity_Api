const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 255,
    trim: true // Supprime les espaces en début et fin de chaîne "  test  " => "test"
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 255,
    trim: true
  },
  middleName: {
    type: String,
    required: false,
    min: 3,
    max: 255,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['M', 'F']
  },
  matricule: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  address: {
    type: String,
    required: false,
    trim: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  city: {
    type: String,
    required: false,
    trim: true
  },
  profileImg: {
    type: String,
    required: false,
    trim: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Departments',
    required: false
  },
  fonction: {
    type: String,
    required: false,
    trim: true
  },
})

module.exports = mongoose.model('Users', UsersSchema); 