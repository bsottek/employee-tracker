const inquirer = require('inquirer');
const { Employee, createEmployee, updateEmployeeRole, viewAllEmployees } = require('./lib/Employee');
const { Role, createRole, viewAllRoles } = require('./lib/Role');
const { Department, createDepartment, viewAllDepartments } = require('./lib/Department');
const cTable = require('console.table');

const promptUser = () => {
    console.log(`
    ================================
    Welcome to the Employee Tracker
    ================================
    `);

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'actionSelection',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
            }
        ])
        .then(actionSelection => {
            choiceHandler(actionSelection);
        })
}

const choiceHandler = (({ actionSelection }) => {
    switch (actionSelection) {
        case 'View all departments':
            viewAllDepartments()
                .then(rows => {
                    return console.table(rows);
                })
                .then(() =>{
                    promptUser();
                });
            break;
        case 'View all roles':
            viewAllRoles()
                .then(rows => {
                    return console.table(rows);
                })
                .then(() => {
                    promptUser();
                });
            break;
        case 'View all employees':
            viewAllEmployees()
                .then(rows => {
                    return console.table(rows);
                })
                .then(() => {
                    promptUser();
                });
            break;
        case 'Add a department':
            createDepartmentPrompt()
                .then(details => {
                    createDepartment(details)
                        .then(() => {
                            promptUser();
                        });
                });
            break;
        case 'Add a role':
            createRolePrompt()
                .then(details => {
                    createRole(details)
                        .then(() => {
                            promptUser();
                        });
                });
            break;
    }
})

const createDepartmentPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What will the new department be called?'

            },
        ])
        .then(details => {
            return details;
        })
}

const createRolePrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What will the new role be called?'

            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of this role?'
            },
            {
                type: 'input',
                name: 'departmentId',
                message: 'Which department will this role fall under? (Please enter department ID)',
            }
        ])
        .then(details => {
            return details;
        })
}

promptUser();



// Uncomment below to test constructors and sql functions.

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
//         let departments = rows;
//         let departmentNames = []
//         departments.forEach(department => departmentNames.push(department.department_name));
//         return departmentNames;
//     });

// let newEmployee = new Employee('Bob', 'Sagget', 1, null);

// createEmployee(newEmployee);

// updateEmployeeRole(2,9);

// viewAllEmployees()
//     .then(rows => {
//         console.table(rows);
//     });
