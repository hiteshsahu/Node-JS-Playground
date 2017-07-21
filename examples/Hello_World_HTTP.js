// Import the http module
var http = require("http");
//Built-in modules to easily split the query string into readable parts,
// such as the URL module.
var url = require('url');

var fs = require('fs');

// Define port number as 3000
const port = 3030;

http.createServer((request, response) => {

    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // 2. Write the announced text to the body of the page
    response.write('Hello World From HTTP URL: ' +request.url + "\n");

     //Parse an address with the url.parse() method,
     // and it will return a URL object with each part of the address
     //as properties
    var parsedURL = url.parse(request.url, true);
    response.write("host: " + parsedURL.host+ "\n"); //returns 'localhost:8080'
    response.write("pathname: " + parsedURL.pathname+ "\n"); //returns '/default.htm'
    response.write("search: " + parsedURL.search+ "\n"); //returns '?year=2017&month=february'
    response.write("qdata: " + parsedURL.query.month+ "\n"); //returns an object: { year: 2017, month: 'february' }, qdata.month returns 'february'

    //Fetch data from query string eg ?year=2017&month=July
    var queryString = url.parse(request.url, true).query;
    var txt = "Year: "+queryString.year + "\nMonth: " + queryString.month;

    // 3. Tell the server that all of the response headers and body have been sent
    //response.end();

    var filename = "MockData" + parsedURL.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
        // response.writeHead(404, {'Content-Type': 'text/html'});
         return response.end("404 Not Found");
       }
        // response.writeHead(200, {'Content-Type': 'text/html'});
         response.write(data);
         return response.end();
         });
    // response.end(txt);

}).listen(port, function() {
  console.log('Server listening on http://localhost:' + port);
}); // 4. Tells the server what port to be on
