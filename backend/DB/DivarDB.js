const mysql = require("mysql");

const DivarDB = mysql.createConnection({
  host: "determined_varahamihira",
  user: "root",
  password: "zMOrMLygT2AiyGoL193hTLww",
  database: "	determined_varahamihira",
  port: 3306,
});

module.exports = DivarDB;
