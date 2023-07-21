const express = require("express");
const router = express.Router();
const DataModel = require("../models/DataModel");

//Post

router.route("/").post((req, res) => {
  const { label, value } = req.body;
  if (!label || !value) {
    return res.status(400).json({ message: "Label and value are required" });
  }
  const newData = new DataModel({ label, value });
  newData
    .save()
    .then(() => res.json("Data added successfully"))
    .catch((err) => res.status(400).json("Error:" + err));
});
module.exports = router;
