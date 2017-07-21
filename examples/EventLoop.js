/*
In an event-driven application, there is generally a main loop that listens for events,
 and then triggers a callback function when one of those events is detected.
*/

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();


 //Create event handlers
var connectionHandler = ()=>{
  console.log('Event Handler: Connection Succesful. !!\n');

  console.log('Trigger Event: Transmitting Data');
  // Fire the data_received event to trigger chain of event
  eventEmitter.emit('data_received');
}

var dataRecievedHandler = ()=>{
   console.log('Event Handler: Data received Succesfully. !!\n');

   console.log(require('events').EventEmitter.listenerCount
    (eventEmitter,'connection') + " Listner(s) listening to connection event");

   console.log('Remove Handler : Removing Connection Listener ');
   // Remove the binding of connection function
   eventEmitter.removeListener('connection', connectionHandler);

   console.log(require('events').EventEmitter.listenerCount
    (eventEmitter,'connection') + " Listner(s) listening to connection event\n");

   console.log('Trigger Event: Close Connection\n');
   // Fire the data_received event to trigger chain of event
   eventEmitter.emit('close_connection');
};

var connectClosedHandler = ()=>{

  console.log('Remove Handler : Removing Data Listener \n');
  // Remove the binding of connection function
  eventEmitter.removeListener('data_received', dataRecievedHandler);

   console.log('Event Handler: Connection Closed. !!\n');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectionHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', dataRecievedHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('close_connection', connectClosedHandler);

console.log('Trigger Event: Start Connection');
// Fire the connection event
eventEmitter.emit('connection');
