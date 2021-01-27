// for importing all packages
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

// declaring hostname and portname
const hostname = 'localhost';
const port = 3000;

// instantiating express module and all middlewares
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes',dishRouter);

//now setting responses for a different route
// app.get('/dishes/:dishId', (req, res, next) => {
     //the modified res values will be contnued here from .all method
//     res.end('Will send details of the dish : '+ req.params.dishId + ' to you!');
// });

// app.post('/dishes/:dishId',(req, res, next) => {
     //req.body will have parameters as name and description.
     //req.body will have data to be created in the server 
//     res.statusCode = 403; 
//     res.end("POST operation isn't supported on /dishes/" + req.params.dishId);
// });

// app.put('/dishes/:dishId', (req, res, next) => {
//     res.write('Updating the dish : ' + req.params.dishId + '\n');
//     res.end('Will update the dish : '+ req.body.name + ' with details: '+ req.body.description);
// })

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting dish : ' + req.params.dishId);
// });

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an express server!</h1></body></html>')
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})