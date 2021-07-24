const inquirer = require('inquirer');
const { Employee, createEmployee, updateEmployeeRole, viewAllEmployees } = require('./lib/Employee');
const { Role, createRole, viewAllRoles } = require('./lib/Role');
const { Department, createDepartment, updateDepartment } = require('./lib/Department');
const cTable = require('console.table');

let newRole = new Role('Paid Media Strategist', '70000', 1);

// createRole(newRole);

// viewAllRoles()
//     .then(rows => {
//         console.table(rows);
//     });


