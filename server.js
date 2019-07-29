// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
	extended:true
}));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// require models and controllers directory
var db = require('./models');
var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/


/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index); 

app.get('/api/user', controllers.user.index);   
app.get('/api/user/:id', controllers.user.show);  
app.post('/api/user', controllers.user.create);   
app.delete('/api/user/:id', controllers.user.destroy);  
app.put('/api/user/:id', controllers.user.update);  

app.get('/api/device', controllers.device.index);   
app.get('/api/device/:id', controllers.device.show);  
app.post('/api/device', controllers.device.create);   
app.delete('/api/device/:id', controllers.device.destroy);  
app.put('/api/device/:id', controllers.device.update);  







/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
