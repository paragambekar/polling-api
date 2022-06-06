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