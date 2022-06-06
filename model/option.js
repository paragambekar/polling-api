const mongoose = require('mongoose');

const optionScehma = new mongoose.Schema({

    option : {
        type : String,
        required : true
    },
    question : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question'
    },
    votes : {
        type : Number
    }
},{
    timestamps : true
});

const Option = mongoose.model('Option',optionScehma);

module.exports = Option;