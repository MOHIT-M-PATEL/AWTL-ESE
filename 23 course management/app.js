// Import required modules
const express = require('express');
const mysql = require('mysql');

// Create connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlroot@1234567',
  database: 'eseawtl'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {    
    throw err;
  }
  console.log('MySQL connected...');
});

// Initialize Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Create a new course
app.post('/courses', (req, res) => {
  const { name, description, instructor, duration } = req.body;
  const newCourse = { name, description, instructor, duration };
  const sql = 'INSERT INTO courses SET ?';
  db.query(sql, newCourse, (err, result) => {
    if (err) throw err;
    res.status(201).send('Course created successfully');
  });
});

// Get all courses
app.get('/courses', (req, res) => {
  const sql = 'SELECT * FROM courses';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a single course by ID
app.get('/courses/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM courses WHERE id = ?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send('Course not found');
    }
  });
});

// Update a course by ID
app.put('/courses/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, instructor, duration } = req.body;
  const updatedCourse = { name, description, instructor, duration };
  const sql = 'UPDATE courses SET ? WHERE id = ?';
  db.query(sql, [updatedCourse, id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send('Course updated successfully');
    } else {
      res.status(404).send('Course not found');
    }
  });
});

// Delete a course by ID
app.delete('/courses/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM courses WHERE id = ?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send('Course deleted successfully');
    } else {
      res.status(404).send('Course not found');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
