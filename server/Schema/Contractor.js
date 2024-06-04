const mongoose = require("mongoose");

const contractorSchema = new mongoose.Schema({
  agency: {
    type: String,
  },
  category: {
    type: String,
  },
  fromDate: {
    type: Date,
  },
  toDate: {
    type: Date,
  },
  licensee: {
    type: String,
  },
  Licensee_Contact_details: {
    type: String,
  },
  vendors_permitted: {
    type: Number,
  },
  stationName: {
    type: String,
  },
  pfPermitted: {
    type: Boolean,
  },
  qrcode: {
    type: String,
  },
  profilePic: {
    type: String,
  },
});

module.exports = mongoose.model("Contractor", contractorSchema);
