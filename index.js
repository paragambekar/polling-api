
const express = require('express');
const port = process.env.PORT;

const app = express();





app.listen(port, function(error){
    if(error){
        console.log(`Error in running server on port ${port}`);
        return;
    }

    console.log(`Server is running on port ${port}`);
});
