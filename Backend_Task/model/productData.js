import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  sold: Boolean,
  dateOfSale: String,
});

let product = mongoose.model("Product", productSchema);
export default product;
