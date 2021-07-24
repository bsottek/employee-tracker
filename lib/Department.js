const db = require('../db/connection');


class Department {
    constructor(name = '') {
        this.name = name;
    }
}

//Create a new department
const createDepartment = (details) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO department (department_name)
                    VALUES (?)`;
        const params = [details.name];

        db.query(sql, params, (err, result) => {
            if (err) {
                return reject(err);
            }

            console.log(`${details.name} added successfully`);
            resolve();
        });
    });
}

const viewAllDepartments = () => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM department`;

        db.query(sql, (err, rows, fields) => {
            if (err) {
                return reject(err);
            }
            // db.end();
            resolve(rows);
        });
    });
}


module.exports = { Department, createDepartment, viewAllDepartments };

// const newDepartment = new Department('Creative');

// createDepartment(newDepartment);

// viewAllDepartments();