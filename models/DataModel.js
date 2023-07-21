
const mongoose = require('mongoose');

const chartDataSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ChartData = mongoose.model('ChartData', chartDataSchema);

module.exports = ChartData;
