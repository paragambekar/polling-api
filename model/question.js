const mongoose = require('mongoose');

// Define Schema for question 
const questionSchema = new mongoose.Schema({

    question : {
        type : String,
        required : true,
    },
    options : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Option'
        }
    ]

},{
    timestamps : true,
})

const Question = mongoose.model('Question',questionSchema);

module.exports = Question;