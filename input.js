let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key)  => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function(key) {
  // // const stdin = process.stdin;
  // stdin.on('data', (key) => {
  if (key === '\u0003') { // for the crt c exit. have to press twice dont know why. reason was the repeated stdin. refactored.
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
};


module.exports = setupInput
;