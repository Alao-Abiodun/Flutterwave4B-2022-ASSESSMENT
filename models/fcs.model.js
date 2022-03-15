const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fcsSchema = new Schema(
  {
   fcs: {
     type: String,
     required: true,
   }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("feeConfigSpec", fcsSchema);
