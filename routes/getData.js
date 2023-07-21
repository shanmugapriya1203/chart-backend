const express= require("express")
const router= express.Router();
const DataModel= require("../models/DataModel")
router.route('/').get((req, res) => {
    DataModel.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;