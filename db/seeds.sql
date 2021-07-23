INSERT INTO department (name)
VALUES (
        'Paid Media'),
        ('SEO'),
        ('Development'),
        ('Sales'
    );

INSERT INTO roles (title, salary, department_id)
VALUES (
        'Paid Media Manager',
        85000,
        1
    ),
    (
        'Paid Media Associate',
        50000,
        1
    ),
    (
        'SEO Manager',
        80000,
        2
    ),
    (
        'SEO Associate',
        45000,
        2
    ),
    (
        'Developer II',
        100000,
        3
    ),
    (
        'Developer I',
        80000,
        3
    ),
    (
        'Sales',
        50000,
        4
    );


INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES (
        'Andrew',
        'Smith',
        1,
        NULL
    ),
    (
        'John',
        'Stamos',
        2,
        NULL
    ),
    (
        'Doctor',
        'Dolittle',
        3,
        NULL
    ),
    (    'Johnny',
        'Cash',
        4,
        NULL
    ),
    (
        'Charles',
        'Norris',
        5,
        NULL
    ),
    (
        'Betty',
        'White',
        5,
        NULL
    ),
    (
        'Saul',
        'Goodman',
        7,
        NULL
    );