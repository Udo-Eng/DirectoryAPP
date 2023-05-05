// Create Handler function for each employee route 
const EmpolyeeService = require("./service");
const logger = require("./logger");


// Create an Employee Handler 
async function createEmpolyeeHandler(req,res){
    try{

        const  employee = await EmpolyeeService.createEmployee(req.body);

        if(employee)  return  res.status(201).json(employee);


    } catch ( err){
        
        logger.error(err);

         res.status(409).json({
            message: `The Employee was not created succesfully  ${err.message}`,
         })
    }
    
}

// Update an Employee  Handler 
async function updateEmpolyeeHandler(req,res){
    try{

        let employeeId = req.params.employeeId;
        
        console.log(employeeId);

        const  updatedEmployee = await EmpolyeeService.updateEmployee(employeeId,req.body);

        if(updatedEmployee) return  res.json(updatedEmployee);

    } catch ( err){

        logger.error(err);

         res.status(500).json({
            message: "The Employee was not updated succesfully",
         })
    }
    
}

// Delete an Employee  Handler 
async function deleteEmpolyeeHandler(req,res){
    try{

        let employeeId = req.params.employeeId;

        const  employee = await EmpolyeeService.removeEmployee(employeeId);

        if(employee)  return  res.json(employee);
        
    } catch ( err){

        logger.error(err);

         res.status(500).json({
            message: "The Employee was not deleted succesfully",
         })
    }
    
}

// Get Empoyees Handler 
async function getEmpolyeesHandler(req,res){
    try{
        const  employees = await EmpolyeeService.getEmpolyees();

        if(employees)  return  res.status(201).json(employees);

    } catch ( err){

        logger.error(err);

         res.status(500).json({
            message: `Unable to retrive empolyees data  ${err}`,
         })
    }
    
}


// Get an Employee Handler 
async function getEmpolyeeHandler(req,res){
    try{

        let employeeId = req.params.employeeId;

        const  employee = await EmpolyeeService.getEmployee(employeeId);

        if(employee)  return  res.status(201).json(employee);

    } catch ( err){

        logger.error(err);

         res.status(500).json({
            message: "Uable to retrieve employee data ",
         })
    }
    
}


module.exports = {
    createEmpolyeeHandler,
    getEmpolyeeHandler,
    getEmpolyeesHandler,
    deleteEmpolyeeHandler,
    updateEmpolyeeHandler,
}