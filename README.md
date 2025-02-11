Express Microservice

This is a simple Express-based microservice that accepts a dynamic route parameter (name) and responds with a personalized welcome message.

Prerequisites

Ensure you have the following installed:

Node.js (version 12 or higher recommended)

npm (comes with Node.js)

Installation

Clone this repository or create a new directory and navigate to it:
mkdir microservice && cd microservice

Initialize a Node.js project (if not already done):
npm init -y

Install Express:
npm install express

Usage

Create a file named server.js and add the following code:
const express = require('express');
const app = express();
const port = 3000;

app.get('/:name', (req, res) => {
const name = req.params.name;
console.log(Received name: ${name}); // Debugging
res.send(Hello ${name}, welcome to VCC course);
});

app.listen(port, () => {
console.log(Microservice running on http://0.0.0.0:${port});
});

Start the server:
node server.js

Open a browser or use curl to test the API:
curl http://localhost:3000/Om
Expected output:
Hello Om, welcome to VCC course

Troubleshooting

If express is not found, install it using:
npm install express

Ensure the server is running before making requests.

Check logs for debugging messages in the terminal.
