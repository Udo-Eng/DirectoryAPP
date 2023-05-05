// Set up the routes to handle the employees Api
const express = require("express");
const EmployeeController = require("./controller");
const validateInput = require("./util");
const schemas = require("./schema");


const router = express.Router();

router.post('/',validateInput(schemas.createEmployeeSchema) ,EmployeeController.createEmpolyeeHandler);

router.put('/:employeeId',validateInput(schemas.updateEmployeeSchema),EmployeeController.updateEmpolyeeHandler);

router.get('/',EmployeeController.getEmpolyeesHandler);

router.get('/:employeeId',EmployeeController.getEmpolyeeHandler);

router.delete('/:employeeId',EmployeeController.deleteEmpolyeeHandler);

module.exports = router;