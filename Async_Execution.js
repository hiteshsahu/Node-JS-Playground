/*
Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task.
 Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

For example, a function to read a file may start reading file and return the control to the execution environment
immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback
function while passing the callback function, the content of the file as a parameter. So there is no blocking
or wait for File I/O. This makes Node.js highly scalable,
as it can process a high number of requests without waiting for any function to return results.
*/


//synchrnous reading of text file
//Blocking Code :the program blocks until it reads the file and then only it proceeds to end the program.
console.log("Blocking Code Started\n\n");
console.log(require("fs").
              readFileSync('MockData/lorel_ipsum.txt').
                toString());
console.log("Blocking Code Ended\n\n");

//Asynchrnous Reading
//Non Blocking Code: program does not wait for file reading and proceeds to print "Program Ended" and at the same time,
//the program without blocking continues reading the file.
console.log("Non Blocking Code Started\n\n");
require("fs").
    readFile('MockData/lorel_ipsum.txt',
    function (err, data) {
        if (err)
        {
        return console.error(err);
         }
        else {
          console.log(data.toString());
        }
});
console.log("Non Blocking Code Ended\n\n");
