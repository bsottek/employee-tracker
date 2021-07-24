const db = require('../db/connection');


class Role {
    constructor(title = '', salary = '', departmentId = '') {
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }
}

//Create a new role
const createRole = (details) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?)`;
    const params = [details.title, details.salary, details.departmentId];

    db.query(sql, params, (err, result) => {
        if (err) {
            return err;
        }
        console.log(`${details.title} added successfully`);
        return;
    });
};

const viewAllRoles = () => {
    const sql = `SELECT roles.*
                FROM roles`;

    db.query(sql, (err, result) => {
        if (err) {
            return err;
        }
        // return result;
        console.log(result);
    })
};

const newRole = new Role('Paid Media Strategist', 70000, 1);

createRole(newRole);

viewAllRoles();