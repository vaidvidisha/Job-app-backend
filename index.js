const config = require('./env');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const appRouter = express.Router();
const seekerRouter = require('./job_seeker/route');

app.use(function (req, res, next) {
    // console.log(url.parse(req.url));
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
seekerRouter.jobSeekerRoutesConfig(appRouter);
app.use('/api', appRouter);

app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});