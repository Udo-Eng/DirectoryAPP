// All Validation schemas for user inputs 
const Joi = require("joi");


const createEmployeeSchema = Joi.object({
    employeeName: Joi.string().min(5).max(255).required(),
    age: Joi.number().min(5).max(255).required(),
    phoneNo: Joi.string().min(11).required(),
    yearsOfExperience: Joi.number().required(),
    department: Joi.string().required(),
    salary :  Joi.number().required(),
  });


  const updateEmployeeSchema = Joi.object({
    employeeName: Joi.string().min(5).max(255).required(),
    age: Joi.number().min(18).required(),
    phoneNo: Joi.string().min(11).required(),
    yearsOfExperience: Joi.number().required(),
    department: Joi.string().required(),
    salary :  Joi.number().required(),
  });


  module.exports = {
    createEmployeeSchema,
    updateEmployeeSchema,
  }