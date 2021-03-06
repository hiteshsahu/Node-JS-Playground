// Import the top-level function of express
var express = require('express');

// Creates an Express application using the top-level function
var app = express();

// Define port number as 3000
const port = 3000;

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/',(request, response) => {

  response.send('Hello From Express !');

}).listen(port, function() {
  // Make the app listen on port 3000
  console.log('Server listening on http://localhost:' + port);
});
