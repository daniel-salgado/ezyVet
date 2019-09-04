const mysql = require('mysql');

let connection;

const getConnection = () => {

  try {
    if (!connection) {
      connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '22253737',
        database: 'ezyVetDB'
      });
    }
  } catch (error) {
    console.log(error);
  }
  return connection;
};

const executeInsert = (queryString, data) => {

  const conn = getConnection();
  conn.connect();

  conn.query(queryString, [data], (error, response) => {

    if (error)
      throw error;

    console.log(error || response);

  });

  conn.end();

}

module.exports = {
  executeInsert
}