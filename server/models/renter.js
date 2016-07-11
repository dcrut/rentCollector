import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  money: { type: Number, required: true, default: 0 },
  apartment: { type: Object },
});

module.exports = mongoose.model('Renter', schema);
