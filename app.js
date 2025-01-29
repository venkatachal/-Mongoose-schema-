const mongoose = require('mongoose');

// Define the schema for a Product
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  inStock: {
    type: Boolean,
    default: true
  }
});

// Create the model for a Product
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
