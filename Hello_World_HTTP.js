// Import the http module
var http = require("http");
//Built-in modules to easily split the query string into readable parts,
// such as the URL module.
var url = require('url');

// Define port number as 3000
const port = 3030;

http.createServer((request, response) => {

    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // 2. Write the announced text to the body of the page
    response.write('Hello World From HTTP URL: ' +request.url + "\n");

    //Fetch data from query string eg ?year=2017&month=July
    var queryString = url.parse(request.url, true).query;
    var txt = "Year: "+queryString.year + " \n Month: " + queryString.month;
    response.end(txt);

    // 3. Tell the server that all of the response headers and body have been sent
    response.end();

}).listen(port, function() {
  console.log('Server listening on http://localhost:' + port);
}); // 4. Tells the server what port to be on
