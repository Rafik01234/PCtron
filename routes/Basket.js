const express = require("express")
const router = express.Router();
const path = require("path")
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve('html/Basket.html')))
    .post((req, res) => res.send("POST"));
module.exports = router