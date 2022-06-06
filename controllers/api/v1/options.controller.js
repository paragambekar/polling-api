const mongoose = require('mongoose');
const Option = require('../../../model/option');



module.exports.addVote = async function(request,response){
    console.log('Inside add votes controller');

    await Option.findByIdAndUpdate(request.params.id, { $inc : { votes : 1 }});

    return response.status(200).json({
        status : 'success',
        message : ' reached Inside add vote'
    })

}

module.exports.deleteOption = async function(request,response){

    try{
        console.log('Inside del option');
        // if(mongoose.Types.ObjectId.isValid(request.params.id)){
        //     console.log('valid id');
        // }
        let option = await Option.findById(request.params.id);

        if(option && !option.votes){
            await Option.findByIdAndDelete(request.params.id);
            return response.status(200).json({
                message : "Option deleted"
            })
        }else{
            return response.status(400).json({
                message : "Cannot delete options that are voted!" 
            })
        }

        // return response.status(200).json({
        //     message : "Option deleted"
        // })

    }catch(error){
        return response.status(500).json({
            message : "Internal Server error!"
        })
    }

}