/*
Events
1) data − This event is fired when there is data is available to read.

2) end − This event is fired when there is no more data to read.

3) error − This event is fired when there is any error receiving or writing data.

4) finish − This event is fired when all the data has been flushed to underlying system.
*/
var fs = require("fs");
var inputData = '';
var outPutData = 'Simply Easy Learning';

// Create a readable stream &  Set the encoding to be utf8.
var readerStream = fs.createReadStream('MockData/lorel_ipsum.txt')
                     .setEncoding('UTF8')
                     .on('data', function(chunk) {
                        //Append data
                        inputData += chunk;
                     }).on('end',function(){
                        //Show final data
                        console.log(inputData);
                     }).on('error', function(err){
                        console.log(err.stack);
                     });


// Create a writable stream &  Write the data to stream with encoding to be utf8
var writerStream = fs.createWriteStream('MockData/output.txt',{flags: 'a'})
                     .on('finish', function() {
                          console.log("Write Finish.");
                      })
                     .on('error', function(err){
                         console.log(err.stack);
                      });


writerStream.write(outPutData,function() {
  // Now the data has been written.
    console.log("Write completed.");
});

// Mark the end of file
writerStream.end();

// Pipe the read and write operations
// read input.txt and write data to output.txt
fs.createReadStream('MockData/lorel_ipsum.txt').pipe(fs.createWriteStream('MockData/PipedOutput.txt'));

// Compress the file input.txt to input.txt.gz
fs.createReadStream('MockData/lorel_ipsum.txt')
   .pipe(require('zlib').createGzip())
   .pipe(fs.createWriteStream('MockData/ZipedOutput.txt.gz'));
