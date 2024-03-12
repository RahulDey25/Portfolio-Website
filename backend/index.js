const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config({path: '../.env'});

const app = express();
const port = process.env.PORT_1 || 5000 ;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/contact', (req, res) => {
    const formDetails = req.body;
    // Process formDetails and send response
    console.log(formDetails);
    res.json({ code: 200, message: 'Received form data' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
