const Employee = require("./model");

// Get Empoyees
async function getEmpolyees() {
  try {
    const employees = await Employee.find({});

    return employees;

  } catch (err) {
    throw new Error(`${err.message}`);
  }
}

// Get Empoyee
async function getEmployee(id) {
  try {
    const empolyee = await Employee.findById(id);

    return empolyee;
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}

// Create an Employee
async function createEmployee(employee) {
  try {

    let createdEmployee = await Employee.create(employee);

    return createdEmployee;

  } catch (err) {
    throw new Error(`${err.message}`);
  }
}

// Update an Employee
async function updateEmployee(id,employee) {

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, employee,{
      new: true,
    });

    return updatedEmployee;

  } catch {
    throw new Error(`${err.message}`);
  }
}

// Delete an Employee
async function removeEmployee(id) {
  try {
    const removedEmployee = await Employee.findByIdAndRemove(id);

    return removedEmployee;
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}

module.exports = {
  getEmpolyees,
  getEmployee,
  createEmployee,
  updateEmployee,
  removeEmployee,
};
