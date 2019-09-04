const csv = require('async-csv');
const fs = require('fs').promises;

const readFileToCSV = async (file) => {

    const csvString = await fs.readFile(file, 'utf-8');
    // Convert CSV string into rows:
    const csvData = await csv.parse(csvString);

    return csvData;

};

module.exports = {
    readFileToCSV
}