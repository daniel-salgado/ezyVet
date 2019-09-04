const capitalize = require('capitalize');
const stripchar = require('stripchar').StripChar;
const PhoneNumber = require('awesome-phonenumber');
const moment = require('moment');

const onlyNumbers = value => {
  const newValue = stripchar.RSExceptNum(value);
  if (newValue)
    return newValue;
  else
    return value;
}

const formattedPhoneNumber = value => {
  const pn = new PhoneNumber(onlyNumbers(value), 'NZ');
  const phoneNumber = pn.getNumber('international');
  if (phoneNumber)
    return phoneNumber;
  else
    return null;
}

const removeSpecialCharacters = value => {
  const newValue = stripchar.RSExceptUnsAlpNum(value);
  if (newValue)
    return newValue;
  else
    return null;
}

const capitalizeFn = value => {

  if (!value)
    return null;
  else
    return capitalize.words(value);
}

const tryParseDate = date => {

  if (moment(date).isValid())
    return moment(date).format('YYYY-MM-DD');
  else
    return null;


}

module.exports = {
  capitalize: capitalizeFn,
  onlyNumbers,
  formattedPhoneNumber,
  removeSpecialCharacters,
  tryParseDate
}