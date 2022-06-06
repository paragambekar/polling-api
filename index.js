require('dotenv').config();
const express = require('express');
const port = process.env.PORT;

const app = express();

const db = require('./config/mongoose');


app.use('/', require('./routes/index'));


app.listen(port, function(error){
    if(error){
        console.log(`Error in running server on port ${port}`);
        return;
    }

    console.log(`Server is running on port ${port}`);
});
