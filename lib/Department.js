const db = require('../db/connection');


class Department {
    constructor(name = '') {
        this.name = name;
    }
}

//Create a new department
const createDepartment = (details) => {
    const sql = `INSERT INTO department (department_name)
    VALUES (?)`;
    const params = details.name;

    db.query(sql, params, (err, result) => {
        if (err) {
            return err;
        }
        console.log(`${details.name} added successfully`);
        return;
    });
};

const viewAllDepartments = () => {
    const sql = `SELECT department.*
                FROM department`;

    db.query(sql, (err, result) => {
        if (err) {
            return err;
        }
        // return result;
        console.log(result);
    })
};


module.exports = { Department, createDepartment, viewAllDepartments };

// const newDepartment = new Department('Creative');

// createDepartment(newDepartment);

// viewAllDepartments();