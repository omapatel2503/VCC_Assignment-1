const express = require('express');
const app = express();
const port = 3000;

app.get('/:name', (req, res) => {
    const name = req.params.name;
    console.log(`Received name: ${name}`); // Debugging
    res.send(`Hello ${name}, welcome to VCC course`);
});

app.listen(port, () => {
    console.log(`Microservice running on http://0.0.0.0:${port}`);
});
