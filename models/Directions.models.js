const mongoose = require('mongoose');

const DirectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    min: 3,
    max: 255
  },
  description: {
    type: String,
    required: true,
    trim: true,
    min: 10,
    max: 1024
  },
  employees: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: false
  },
 
});

module.exports = mongoose.model('Directions', DirectionSchema);

