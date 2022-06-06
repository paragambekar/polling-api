const mongoose = require('mongoose');
const Question = require('../../../model/question');
const Option = require('../../../model/option');

// Create new question
module.exports.createQuestion = async function(request,response){
    console.log('Request body to create new question',request.body);
    try{
        let question = await Question.create(request.body);
        console.log('Question in create qu',question);
        return response.status(200).json({
            status : 'success',
            message : "New Question Created Successfully",
        });
    }catch(error){
        return response.status(500).json({
            status : 'fail',
            message : "Internal Server Error" 
        })
    }

}

// View Question 
module.exports.viewQuestion = async function(request,response){

    try{
        const data = await Question.findById(request.params.id).populate('options' , '_id option votes link_to_vote');
        console.log('q------------>',data);

        console.log('Question-------->',data);
        return response.status(200).json({
            status : 'success',
            data : data
        })
    }catch(error){
        console.log(error);
        return response.status(500).json({
            message : "Internal Server Error" 
        })
    }
}

// Add option to a particular question
module.exports.addOption = async function(request,response){

    try{
        // find the question to which option need to be added with the params in url 
        let question = await Question.findById(request.params.id);
        if(question){
            // if question found create an option assosociated with the question
            let option = await Option.create(request.body);
            option.question = request.params.id;
            let linkToVote = `http://${request.headers.host}/api/v1/options/${option._id}/add_vote`;
            question.options.push(option);
            option.link_to_vote = linkToVote;
            option.save();
            question.save();
            return response.status(200).json({
                status : 'success',
                message : 'Option Added For The Question Successfully',
            })
        }else{
            // if not found return saying question not found
            return response.status(404).json({
                status : 'fail',
                message : 'No Question Found With The Provided ID'
            })
        }
    }catch(error){
        return response.status(500).json({
            status : 'fail',
            message : "Internal Server Error" 
        })
    }
}

// Delete a question
module.exports.deleteQuestion = async function(request,response){

    try{
        // find the question which needs to be deleted with the params in url
        let question = await Question.findById(request.params.id).populate('options');
        console.log('Question in delete question', question);

        // check if the options of the question have any votes
        for(option of question.options){
            if(option.votes){
                // if votes are present we cant delete the question
                return response.status(403).json({
                    status : 'unauthorized',
                    message : 'Cannot Delete Question, Options Are Already Voted'
                })
            }
        }

        // if votes are not present for the option of the question the question can be deleted
        await Question.findByIdAndDelete(request.params.id)

        return response.status(200).json({
            status : 'success',
            message : 'Question Deleted Successfully',
        })
    }catch(error){
        return response.status(500).json({
            status : 'fail',
            message : "Internal server error"
        })
    }

}
