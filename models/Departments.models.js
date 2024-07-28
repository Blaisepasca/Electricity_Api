const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name:{
        type: String ,
        required: true ,
        trim: true ,
        unique: true,
        min: 3 ,
        max: 255 ,

    },
    missionStatement:{
        type: String ,
        required: true ,
        trim : true ,
        unique : true ,
        min : 3 ,
        max : 1000 ,

    },
    objectives: {
        type: [String], // Array of strings
        required: false ,
    },
    roles: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 255
    },
    responsibilities: {
            type: [String], // Array of strings
            required: false
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: false
    }],
    budget: {
        type: Number,
        required: false
    },
    establishedDate: {
        type: Date,
        required: false
    }
           
});
 
module.exports = mongoose.model('Departments', DepartmentSchema);
