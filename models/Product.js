const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, unique: true },
    image: { type: String, required: true },
    category: { type: Array },
    price: { type: Number, required: true },
    size: { type: Array },
    color: { type: Array },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductsSchema);
