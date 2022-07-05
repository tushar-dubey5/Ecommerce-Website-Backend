const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, unique: true },
    image: { type: String, required: true },
    category: { type: Array, required: true },
    price: { type: Number, required: true },
    size: { type: String },
    color: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", ProductsSchema);
