exports.sendResponse = (response, res) => {
    if(response.status){
        res.status(200).send({ status: true, data: response.data });
    } else {
        res.status(400).send({ status: false, message: response.message });
    }
}

exports.sendError = (error, res) => {
    res.status(400).send({ status: false, message: error });
}
