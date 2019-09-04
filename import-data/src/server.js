'use strict';

const express = require('express');
const fileUpload = require('express-fileupload');
const importData = require('./services/importDataFromCSV');
const app = express();

// default options
app.use(fileUpload());


app.post('/', (req, res) => {

  let contactFile = req.files.contacts;

  if (contactFile) {

    contactFile.mv('/tmp/tmp.csv', function (err) {
      if (err)
        return res.status(500).send(err);

      importData.importCsvData2MySQL('/tmp/tmp.csv');


      res.send('File uploaded!');
    });

  }


});

app.listen(process.env.HTTP_PORT || 5000);