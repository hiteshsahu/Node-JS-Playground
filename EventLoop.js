/*
In an event-driven application, there is generally a main loop that listens for events,
 and then triggers a callback function when one of those events is detected.
*/

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler  and  Bind the connection event with the handler
eventEmitter.on('connection', ()=>{
  console.log('Event Handler: Connection Succesful. !!\n');

  console.log('Trigger Event: Transmitting Data');
  // Fire the data_received event to trigger chain of event
  eventEmitter.emit('data_received');
});

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', ()=>{
   console.log('Event Handler: Data received Succesfully. !!\n');

   console.log('Trigger Event: Close Connection');
   // Fire the data_received event to trigger chain of event
   eventEmitter.emit('close_connection');
});

// Bind the data_received event with the anonymous function
eventEmitter.on('close_connection', ()=>{
   console.log('Event Handler: Connection Closed. !!\n');
});

console.log('Trigger Event: Start Connection');
// Fire the connection event
eventEmitter.emit('connection');
