const mongoose = require("mongoose");

const bmiSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user_id: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    BMI: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BmiModel = mongoose.model("user_bmi", bmiSchema);

module.exports = { BmiModel };
