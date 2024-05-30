// Importing required modules
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');
const { EventEmitter } = require('events');

// Creating a custom server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    res.write(htmlContent);
    
  // Getting OS information
  const osInfo = `OS Platform: ${os.platform()}\nOS Type: ${os.type()}\nOS Release: ${os.release()}\n`;

  // Getting file path information
  const filePath = path.join(__dirname, 'index.html');
  const fileExists = fs.existsSync(filePath) ? 'File exists' : 'File does not exist';

  // Sending OS and file path information in the response
  res.write(`\nOS Information:\n${osInfo}\n`);
  res.write(`File Path: ${filePath}\nFile Status: ${fileExists}\n`);

  // Creating an event emitter
  const eventEmitter = new EventEmitter();

  // Event listener
  eventEmitter.on('customEvent', (message) => {
    res.write(`\nEvent Emitted: ${message}\n`);
    res.end('Server response complete.\n');
  });

  // Emitting a custom event
  eventEmitter.emit('customEvent', 'This is a custom event.');
});

// Server listening on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
