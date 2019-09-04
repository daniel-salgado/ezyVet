const mysql = require('../gateways/mySql');
const readFile = require('../utils/readFile').readFileToCSV;
const { prepareData } = require('./prepareData');

const importCsvData2MySQL = async filename => {

  const fileContent = await readFile(filename);
  // console.log('fileContent', fileContent);

  const csvData = prepareData(fileContent);
  // console.log('csvData', csvData);

  const query = 'INSERT INTO stage (Business, Title,FirstName,LastName,DateOfBirth,AddressLine1,AddressLine2,Suburb,City,PostCode,HomeNumber,FaxNumber,WorkNumber,MobileNumber,OtherNumber,Notes) VALUES ?';

  mysql.executeInsert(query, csvData);

}

// // Import CSV Data to MySQL database
// (async () => {
//   importCsvData2MySQL('../../tmp/csv/contact_list .csv');
// })();

module.exports = {
  importCsvData2MySQL
}