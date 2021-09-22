const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133",// IP address here,
    port: "50542" // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // code that does something when the connection is first established
  });

  conn.on("connect", () => {
    conn.write("Name: JSP");
    conn.write("Say: Hellor Rob Ford");
   
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
  
module.exports = connect;