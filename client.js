const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133",// IP address here,
    port: "50542" // PORT number here,
  });

  conn.on("connect", () => {
    console.log("you are connected");
    // code that does something when the connection is first established
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
  
};

{connect};
  
module.exports = {connect};