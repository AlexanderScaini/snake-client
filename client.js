const net = require('net');
const { on } = require('process');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PAN")
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50)   
  })

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });  

  return conn;
};

module.exports = {connect};