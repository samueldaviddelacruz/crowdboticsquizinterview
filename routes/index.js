const express = require("express");

const router = express.Router();


const onIndex = (req, res, next) => {
    res.render("index", { title: "Quiz" });
}

router.get("/", onIndex);

module.exports =  router;
