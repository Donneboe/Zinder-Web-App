const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Zinder = new Schema({
    birth_date1: {
        type: String
    },
    birth_date1: {
        type: String
    },
});

module.exports = mongoose.model('Zinder', Zinder);