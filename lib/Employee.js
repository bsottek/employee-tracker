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
    return new Promise((resolve, reject) => {    
        const sql = `INSERT INTO employee (first_name, last_name, roles_id, manager_id)
        VALUES (?, ?, ?, ?)`;
        const params = [details.firstName, details.lastName, details.rolesId, details.managerId];

        db.query(sql, params, (err, result) => {
            if (err) {
                return reject(err);
            }
            console.log(`${details.firstName} ${details.lastName} added successfully`);
            resolve();
        });
    });
};

const viewAllEmployees = () => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM employee`;

        db.query(sql, (err, rows, fields) => {
            if (err) {
                return reject(err);
            }
            // db.end();
            resolve(rows);
        });
    });
};


const updateEmployeeRole = (newRoleId, employeeId) => {

    return new Promise((resolve, reject) => {
        const sql = `UPDATE employee SET roles_id = ?
                    WHERE id = ?`;

        const params = [newRoleId, employeeId];

        db.query(sql, params, (err, result) => {
            if(err) {
                return err;
            }
            console.log(`Employee ${employeeId} role updated.`)
        });
    });
};

module.exports = { Employee, createEmployee, updateEmployeeRole, viewAllEmployees };

// const test = new Employee('Test', 'McTesterson', 1, 2);

// viewAllEmployees(test);

// updateEmployeeRole(9,2);



