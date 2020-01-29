const express = require("express");
const router = express.Router();
const Book = require("./models/book")
const bookController = require("./controllers/bookController")
router.route("/books").get(bookController.findAll())
.post(bookController.create())
router.route("/books/:id")
    .delete(bookController.remove())


module.exports=router;