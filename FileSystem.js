var http = require('http');
var fs = require('fs');

// Define port number as 3000
const port = 3050;

http.createServer(function (req, res) {
     //-----------CREATE AND UPDATE file on server------------------
    //fs.appendFile() method appends specified content to a file.
    //If the file does not exist, the file will be created:
                        if (err) throw err;
                        console.log('TestCRUD File Saved!');
                          });

   //fs.writeFile() method replaces the specified file and content
   //if it exists. If the file does not exists a new file,
   //containing the specified content, will be created
                         if (err) throw err;
                         console.log('File OverRidden!');
                       });
  //fs.rename() method renames the specified file:
                          if (err) throw err;
                          console.log('File Renamed!');
                        });

   //-----------DELETE file from server------------------------
   //fs.unlink() method deletes the specified file:
                          if (err) throw err;
                          console.log('File deleted!');
                        });

    //-----------READ file from server------------------------
    fs.readFile('MockData/TestHTML.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(port);
