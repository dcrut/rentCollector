import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  sqft: { type: Number, required: true, default: 1 },
  bedrooms: { type: Number, required: true, default: 1 },
  floor: { type: Number, required: true, default: 1 },
  rent: { type: Number, required: true, default: 1 },
  renter: { type: Object },
});

module.exports = mongoose.model('Apartment', schema);
