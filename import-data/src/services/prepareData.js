
const utils = require('../utils/utils');

module.exports.prepareData = fileContent => {

    const header = fileContent[0].map(columnName => columnName.replace(/\s/g, ''));

    fileContent.shift();
    const result = [];

    fileContent.map(row => {

        utils.tryParseDate(row[header.indexOf('DateOfBirth')]);

        const business = utils.capitalize(row[header.indexOf('Business')]);
        const title = utils.capitalize(utils.removeSpecialCharacters(row[header.indexOf('Title')]));
        const firstName = utils.capitalize(row[header.indexOf('FirstName')]);
        const lastName = utils.capitalize(row[header.indexOf('LastName')]);
        const dateOfBirth = utils.tryParseDate(row[header.indexOf('DateOfBirth')]);
        const addressLine1 = utils.capitalize(row[header.indexOf('AddressLine1')]);
        const addressLine2 = utils.capitalize(row[header.indexOf('AddressLine2')]);
        const suburb = utils.capitalize(row[header.indexOf('Suburb')]);
        const city = utils.capitalize(row[header.indexOf('City')]);
        const postCode = utils.onlyNumbers(row[header.indexOf('PostCode')]);
        const homeNumber = utils.formattedPhoneNumber(row[header.indexOf('HomeNumber')]);
        const faxNumber = utils.formattedPhoneNumber(row[header.indexOf('FaxNumber')]);
        const workNumber = utils.formattedPhoneNumber(row[header.indexOf('WorkNumber')]);
        const mobileNumber = utils.formattedPhoneNumber(row[header.indexOf('MobileNumber')]);
        const otherNumber = utils.formattedPhoneNumber(row[header.indexOf('OtherNumber')]);
        const notes = utils.removeSpecialCharacters(row[header.indexOf('Notes')]);

        result.push([business,
            title,
            firstName,
            lastName,
            dateOfBirth,
            addressLine1,
            addressLine2,
            suburb,
            city,
            postCode,
            homeNumber,
            faxNumber,
            workNumber,
            mobileNumber,
            otherNumber,
            notes]);

    });

    return result;

}

