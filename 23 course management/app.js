const mysql = require('mysql2');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlroot@1234567',
    database: 'node_crud' // Change this to your database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// CREATE operation
const createUser = (name, email) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    connection.query(sql, [name, email], (err, result) => {
        if (err) throw err;
        console.log('User added successfully:', result);
    });
};

// READ operation
const getUsers = () => {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        console.log('Users:', results);
    });
};

// UPDATE operation
const updateUser = (id, name, email) => {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    connection.query(sql, [name, email, id], (err, result) => {
        if (err) throw err;
        console.log('User updated successfully:', result);
    });
};

// DELETE operation
const deleteUser = (id) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) throw err;
        console.log('User deleted successfully:', result);
    });
};

// Example usage
createUser('John Doe', 'john@example.com');
getUsers();
updateUser(1, 'Jane Doe', 'jane@example.com');
deleteUser(1);

// Close the MySQL connection
connection.end();
