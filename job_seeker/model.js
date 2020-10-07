const config = require("../env.js");
const request = require('request');
const fs = require('fs')
const path = require('path')
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;

exports.getJobSeekerDetails = async (req) => {
    var reqId = req.params.id;
    MongoClient.connect(config.mongoUrl, function (err, db) {
        if (err) throw err;
        var dbo = db.db('onlineJobApp');

        var query = { _id: reqId };
        console.log(query);
        dbo.collection("job_seeker_details").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);

            db.close();
            return result;
        });
    });
}

exports.postJobSeekerDetails = (req) => {
    // console.log(req.body);
    MongoClient.connect(config.mongoUrl).then((db) => {
        var dbo = db.db('onlineJobApp');
        dbo.collection('job_seeker_details').insertOne(req.body)
            .then((res) => {
                db.close();
                console.log(res);
                return (res);
            }).catch((err) => {
                throw err;
            });
    }).catch((err) => {
        throw err;
    })
}

exports.postJobDetails = (req) => {
    // console.log(req.body);
    MongoClient.connect(config.mongoUrl).then((db) => {
        var dbo = db.db('onlineJobApp');
        dbo.collection('job_details').insertOne(req.body)
            .then((res) => {
                db.close();
                return (res);
            }).catch((err) => {
                throw err;
            });
    }).catch((err) => {
        throw err;
    })
}