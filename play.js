const {connect} = require("./client.js");
const net = require("net");

console.log("Connecting ...");
connect();

const handleUserInput = function () {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


setupInput();

// conn.on("connect", () => {
//   console.log("you are connected");
//   // code that does something when the connection is first established
// });