/* Buffer class which provides instances to store raw data to a raw memory allocation outside the V8 heap. */

//Create uninitiated Buffer of 10 octets
var buf = new Buffer(10);

//Create  Buffer from a given array
 buf = new Buffer([10, 20, 30, 40, 50]);

//Create a Buffer from a given string and optionally encoding type
 buf = new Buffer("Simply Easy Learning", "utf-8");

//Write buf.write(string[, offset][, length][, encoding])
//If there is not enough space in the buffer to fit the entire string, it will write a part of the string
console.log("Octets written : "+   new Buffer(256).write("Simply Easy Learning"));

//Read buf.toString([encoding][, start][, end])
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde


//Buffer to JSON
 buf = new Buffer('Simply Easy Learning');
 console.log(buf.toJSON(buf));

 //Concat list of Buffer and assign it to third buffer
console.log("Concat content: " + Buffer.concat([new Buffer('Buffer 1 '),
                                                new Buffer('Buffer 2')]).toString());

// Compare Buffers

var buffer1 = new Buffer('123');
var buffer2 = new Buffer('ABCD');
// using compare
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

var buf1 = new Buffer("abc");
var buf2 = new Buffer("abcd");
// using compare(,)
Buffer.compare(buf1,buf2);

if(result < 0) {
   console.log(buf1 +" comes before " + buf2);
}else if(result == 0){
   console.log(buf1 +" is same as " + buf2);
}else {
   console.log(buf1 +" comes after " + buf2);
}

// using equals
var buf1 = new Buffer("abc");
var buf2 = new Buffer("abc");
console.log(buf1.equals(buf2));


//Copy Buffer buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
console.log("Copyied Buffer Content: " + new Buffer('ABC').copy( new Buffer(3)).toString());

//Slice Buffer
console.log("Sliced Buffer Content: " + new Buffer('0123456789').slice(0,5).toString());
