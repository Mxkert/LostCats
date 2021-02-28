const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Invoice = new Schema({
    klant: {
        type: String
    },
    type_klant: {
        type: String
    },
    adres_klant: {
        type: String
    },
    btw_nummer: {
        type: String
    },
    datum: {
        type: Date
    },
    totaalbedrag: {
        type: Number
    },
    percentage_fee: {
        type: Number
    },
    fee: {
        type: Number
    },
    percentage_btw: {
        type: Number
    },
    btw: {
        type: Number
    },
    euro_prijs: {
        type: Number
    },
    currency: {
        type: String
    },
    werkzaamheden: {
        type: Array
    }
});
module.exports = mongoose.model('Invoice', Invoice);