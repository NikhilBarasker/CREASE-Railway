const mongoose = require("mongoose");
const Contractor = require("./Contractor");

const model = new mongoose.Schema({
  fname: {
    type: String,
  },
  dob: {
    type: Date,
  },
  mobile: {
    type: Number,
  },
  aadhar: {
    type: Number,
  },
  aadharPhoto: {
    type: String,
  },
  policeVarificationDate: {
    type: Date,
  },
  policeVarificationDocument: {
    type: String,
  },
  medicalValidityDate: {
    type: Date,
  },
  medicalValidityDocument: {
    type: String,
  },
  validity_of_Authority: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  Contractor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contractor",
    },
  ],
});

module.exports = mongoose.model("Invigilator", model);
