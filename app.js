const inquirer = require('inquirer');
const { Employee, createEmployee, updateEmployeeRole, viewAllEmployees, selectEmployee } = require('./lib/Employee');
const { Role, createRole, viewAllRoles, selectRole } = require('./lib/Role');
const { Department, createDepartment, viewAllDepartments, selectDepartment } = require('./lib/Department');
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
        case 'Add an employee':
            createEmployeePrompt()
                .then(details => {
                    createEmployee(details)
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
                type: 'list',
                name: 'departmentId',
                message: 'Which department will this role fall under?',
                choices: selectDepartment
            }
        ])
        .then(details => {
            return details;
        })
}

const createEmployeePrompt = () => {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: `What is the employee's first name?`

            },
            {
                type: 'input',
                name: 'lastName',
                message: `What is the employee's last name?`
            },
            {
                type : 'list',
                name: 'rolesId',
                message: `What is the employee's role?`,
                choices: selectRole
            },
            {
                type : 'confirm',
                name: 'managerConfirm',
                message: 'Does this employee have a manager?',
                default: false
            },
            {
                type: 'list',
                name: 'managerId',
                message: `Who is this employee's manager?`,
                choices: selectEmployee,
                when: ({managerConfirm}) => {
                    if (managerConfirm){
                        return true;
                    } else {
                        return false;
                    }
                }
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
//         let departmentNames = rows.map(a => a.department_name);
//         return(console.log(departmentNames));
//     });

// viewAllRoles()
//     .then(rows => {
//         // let roleNames = rows.map(a => a.title);
//         // return (console.log(roleNames));

//         let rolesChoices = rows.map(a => );
//         console.log(rolesChoices);
//     });

// let newEmployee = new Employee('Bob', 'Sagget', 1, null);

// createEmployee(newEmployee);

// updateEmployeeRole(2,9);

// viewAllEmployees()
//     .then(rows => {
//         console.table(rows);
//     });
