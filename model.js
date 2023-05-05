const  mongoose = require("mongoose");


const EmployeeSchema = new mongoose.Schema({

    
    employeeName : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    phoneNo : {
        type : String,
        required : true,
    },
    yearsOfExperience : {
        type : Number,
        required : true,
    },
    department : {
        type : String,
        required : true,
    },
    salary : {
        type : Number,
        required : true,
    },
});


const Employee =  mongoose.model("Employee",EmployeeSchema);

module.exports = Employee;

