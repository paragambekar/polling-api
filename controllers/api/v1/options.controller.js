const mongoose = require('mongoose');
const Option = require('../../../model/option');


// To add vote to an option of a question
module.exports.addVote = async function(request,response){

    try{
        await Option.findByIdAndUpdate(request.params.id, { $inc : { votes : 1 }});
        return response.status(200).json({
            status : 'success',
            message : 'Vote Added Successfully!'
        })
    }catch(error){
        return response.status(500).json({
            status : 'fail',
            message : 'Internal Server Error'
        })
    }
}

// To delete an option of a question
module.exports.deleteOption = async function(request,response){

    try{
        // find option with params
        let option = await Option.findById(request.params.id);

        // if options doesnt have votes,delete the option
        if(option && !option.votes){
            await Option.findByIdAndDelete(request.params.id);
            return response.status(200).json({
                status : 'success',
                message : "Option Deleted Successfully"
            })
        }else{
            // if option has votes it cant be deleted
            return response.status(400).json({
                status : 'unauthorized',
                message : "Cannot Delete Options That Are Voted!" 
            })
        }

    }catch(error){
        return response.status(500).json({
            status : 'fail',
            message : 'Internal Server error!'
        })
    }

}