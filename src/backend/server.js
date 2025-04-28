const express = require('express');
const curl = require('curl')

const app = express();
const port = 8080;


app.listen(port, function() { console.log(`Server running on post ${port}`)});