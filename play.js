const connect = require("./client.js");
const setupInput = require("./input");
// const net = require("net");

console.log("Connecting ...");
// connect();

setupInput(connect());

// conn.on("connect", () => {
//   console.log("you are connected");
//   // code that does something when the connection is first established
// });