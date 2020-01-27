const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment');
moment.locale('en-gb'); 


const ShippingInfoSchema = new Schema({
    shipperName: String,
    shipmentDate: String,
    qty: String,
    destination: String,
    importerName: String,
    country: String
});

const ShipppingInfo = mongoose.model('shippingInfo', ShippingInfoSchema);

module.exports = ShipppingInfo;