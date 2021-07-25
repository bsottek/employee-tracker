const db = require('../db/connection');
const cTable = require('console.table');


class Role {
    constructor(title = '', salary = '', departmentId = '') {
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }
}

const createRole = (details) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO roles (title, salary, department_id)
                    VALUES (?, ?, ?)`;
        const params = [details.title, details.salary, details.departmentId];

        db.query(sql, params, (err, result) => {
            if (err) {
                return reject(err);
            }
            
            console.log(`${details.title} added successfully`);
            resolve();
        });
    });
}


const viewAllRoles = () => {
    return new Promise(function(resolve, reject) {
        const sql = `SELECT * FROM roles`;

        db.query(sql, (err, rows, fields) => {
            if (err) {
                return reject(err);
        }
            // db.end();
            resolve(rows);
        });
    });
}

const selectRole = () => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM roles`;

        db.query(sql, (err, rows, fields) => {
            if (err) {
                return reject(err);
            }
            rolesArr = rows.map(row => ({name: row.title, value: row.id}));
            resolve(rolesArr);
        });
    });
}

module.exports = { Role, createRole, viewAllRoles, selectRole };

// const newRole = new Role('Paid Media Strategist', 70000, 1);

// createRole(newRole);

// viewAllRoles();