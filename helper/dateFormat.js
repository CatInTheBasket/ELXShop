"use strict"
const dateFormat = (date) => {
    date = date.toISOString().split('-');
    date[2] = date[2].split('T')[0];
    date = date.join("-");
    return date;
}
module.exports = dateFormat;