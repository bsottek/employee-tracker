const inquirer = require('inquirer');
const { Employee, createEmployee, updateEmployeeRole, viewAllEmployees } = require('./lib/Employee');
const { Role, createRole, viewAllRoles } = require('./lib/Role');
const { Department, createDepartment, viewAllDepartments } = require('./lib/Department');
const cTable = require('console.table');

// let newRole = new Role('Paid Media Strategist', '70000', 1);

// createRole(newRole);

// viewAllRoles()
//     .then(rows => {
//         console.table(rows);
//     });

// let newDepartment = new Department('Creative');

// createDepartment(newDepartment);

// viewAllDepartments()
//     .then(rows => {
//         console.table(rows);
//     });

let newEmployee = new Employee('Bob', 'Sagget', 1, null);

createEmployee(newEmployee);

updateEmployeeRole(2,9);

viewAllEmployees()
    .then(rows => {
        console.table(rows);
    });
