'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';
const responseData = {
    message: 'Success!',
    count: 7
}

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const jsonContent = JSON.stringify(responseData);
    res.end(jsonContent);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});