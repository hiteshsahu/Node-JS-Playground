// Import the http module
var http = require("http");

// Define port number as 3000
const port = 3000;

http.createServer((request, response) => {

    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // 2. Write the announced text to the body of the page
    response.write('Hello World From HTTP !\n');

    // 3. Tell the server that all of the response headers and body have been sent
    response.end();

}).listen(port, function() {
  console.log('Server listening on http://localhost:' + port);
}); // 4. Tells the server what port to be on
