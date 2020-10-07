const jobSeekerModel = require('./model');
const commonMethods = require('../common/common');

exports.getDetails = async(req,res) => {
    try{
        await jobSeekerModel.getJobSeekerDetails(req);
        // commonMethods.sendResponse(response, res);
    }catch(error){
        commonMethods.sendError(error, res);
        
    }
}

exports.postDetails = async(req,res) => {
    try{
        await jobSeekerModel.postJobSeekerDetails(req);
        // console.log("controller",response);
        // commonMethods.sendResponse(response, res);
    }catch(error){
        commonMethods.sendError(error, res);
    }
}

exports.postJobDetails = async(req,res) => {
    try{
        await jobSeekerModel.postJobDetails(req);
        // console.log("controller",response);
        // commonMethods.sendResponse(response, res);
    }catch(error){
        commonMethods.sendError(error, res);
    }
}