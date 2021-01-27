// all dish routes wpuld be initialized here as a mini router module

const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

//all the HTTP methods would be mounted to this
// all .get /post will get chained to the same route 
dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next(); //next() makes the control continue the next specifications if specified
})
.get((req, res, next) => {
    //the modified res values will be contnued here from .all method
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    //req.body will have parameters as name and description.
    //req.body will have data to be created in the server 
    res.end(`Will add the dish : ${req.body.name} with details : ${req.body.description}` );
})
.put((req, res, next) => {
    res.statusCode = 403; 
    res.end("PUT operation isn't supported!");
})
.delete((req, res, next) => {
    res.end('Deleting all the dishes!');
});

module.exports = dishRouter;
