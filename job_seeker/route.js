const jobSeekerController = require('./controller');

exports.jobSeekerRoutesConfig = function(app){
    app.get('/job-seeker-details/:id',[
        jobSeekerController.getDetails
    ]);

    app.post('/job-seeker/',[
        jobSeekerController.postDetails
    ])

    app.post('/job-details/',[
        jobSeekerController.postJobDetails
    ])
}