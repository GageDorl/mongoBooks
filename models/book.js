const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default:null
  },
  link: {
    type:String,
    require:true
  },
  
  
});

module.exports = Book = mongoose.model("books", BookSchema);
