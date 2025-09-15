const express = require("express");
const router = express.Router();

// index
router.get("/", (req, res) => {
  res.send("GET for posts");
});

// show
router.get("/:id", (req, res) => {
  res.send("GET for post Id");
});

// POST
router.post("/", (req, res) => {
  res.send("POST for posts");
});

// DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE for posts Id");
});

module.exports = router;
