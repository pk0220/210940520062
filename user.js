const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "my_reactexam",
};

async function addMsg(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Created");
  const sql = `INSERT INTO MESSAGE values(?);`;
  await connection.queryAsync(sql, [user.message]);
  await connection.endAsync();
}

const data = {
  message: "Hello react, Welocome to CDAC mumbai",
};
//addMsg(data);
module.exports = { addMsg };
