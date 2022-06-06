const { fail } = require('assert');
const mongoose = require('mongoose');
const Question = require('../../../model/question');
const Option = require('../../../model/option');


module.exports.createQuestion = async function(request,response){
    console.log('Request body to create new question',request.body);
    try{
        let question = await Question.create(request.body);
        return response.status(200).json({
            status : 'success',
            message : "New Question Created Successfully"
        });
    }catch(error){
        return response.status(500).json({
            status : fail,
            message : "Internal Server Error" 
        })
    }

}

module.exports.viewQuestion = async function(request,response){

    const questionId = request.params;
    // console.log(request.body.params);
    try{
        const question = await Question.findById(request.params.id).populate({
            path : 'options'
        });

        const q = await Question.findById(request.params.id).populate('options' , '-question -createdAt -updatedAt -__v');
        console.log('q------------>',q);

        console.log('Question-------->',question);
        return response.status(200).json({
            status : 'success',
            data : question,
            q : q
        })
    }catch(error){
        console.log(error);
        return response.status(500).json({
            message : "Internal Server Error" 
        })
    }
    // console.log('request.params',request.params);
   

    // if(question){
    //     return response.status(200).json({
    //         question : question,
    //     })
    // }else{
    //     return response.status(500).json({
    //         message : "Internal Server Error" 
    //     })
    // }
   
}

module.exports.addOption = async function(request,response){

    console.log('request.params',request.params);
    console.log('Request body to add optins', request.body);

    let question = await Question.findById(request.params.id);
    if(question){
        let option = await Option.create(request.body);
        question.options.push(option);
        question.save();
        console.log('Question',question); 
    }else{
        return response.status(500).json({
            message : 'No question found with the provided id'
        })
    }

    return response.status(500).json({
        message : "Internal Server Error" 
    })


}
