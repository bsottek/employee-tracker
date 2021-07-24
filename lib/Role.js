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
    const params = [details.title, details.salary, details.department];

    db.query(sql, params, (err, result) => {
        if (err) {
            return err;
        }
        console.log(`${details.title} added successfully`);
        return;
    });
};

const viewAllEmployees = () => {
    const sql = `SELECT employee.*, roles.title, department.name
                AS department 
                FROM employee
                LEFT JOIN (roles, department)
                ON (employee.roles_id = roles.id AND roles.department_id = department.id)`;

    db.query(sql, (err, result) => {
        if (err) {
            return err;
        }
        return result;
    })
};

const newRole = new Role('Paid Media Strategist', 70000, 1);

createRole(newRole);