const db = require('../db/connection');


class Employee {
    constructor(firstName = '', lastName = '', rolesId = '', managerId = '') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rolesId = rolesId;
        this.managerId = managerId;
    }
}

//Create a new employee
const createEmployee = (details) => {
    const sql = `INSERT INTO employee (first_name, last_name, roles_id, manager_id)
    VALUES (?, ?, ?, ?)`;
    const params = [details.firstName, details.lastName, details.rolesId, details.managerId];

    db.query(sql, params, (err, result) => {
        if (err) {
            return err;
        }
        console.log(`${details.firstName} ${details.lastName} added successfully`);
        return;
    });
};

const viewAllEmployees = () => {
    const sql = `SELECT employee.*, roles.title, department.name
                AS department 
                FROM employee
                LEFT JOIN (roles, department)
                ON (employee.roles_id = roles.id AND roles.department_id = department.id)`;

    db.query(sql,(err, result) => {
        if(err){
            return err;
        }
        return result;
    })
};

const updateEmployeeRole = (employeeId, newRoleId) => {
    const sql = `UPDATE employee SET roles_id = ?
                WHERE id = ?`;

    const params = [newRoleId, employeeId];

    db.query(sql, params, (err, result) => {
        if(err) {
            return err;
        }
        console.log(`Employee ${employeeId} role updated.`)
    })
}



const test = new Employee('Test', 'McTesterson', 1, 2);

viewAllEmployees(test);

updateEmployeeRole(9,2);









    // viewAllEmployees(){
    //     const sql = `SELECT employee.*, roles.title, department.name
    //             AS department 
    //             FROM employee
    //             LEFT JOIN (roles, department)
    //             ON (employee.roles_id = roles.id AND roles.department_id = department.id)`;

    //     db.promise().query(sql)
    //         .then( ([rows,fields]) => {
    //             return(rows);
    //         })
    // }


