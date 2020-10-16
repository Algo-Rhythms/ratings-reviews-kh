const mongoose = require('mongoose');
const { Schema } = mongoose;

// const  = new Schema {}
const productSchema = mongoose.Schema({
  product_id: Number,
  product_name: String
});
let Product = mongoose.model('Product', productSchema);

const reviewSchema = new Schema {}
let Review = mongoose.model('Review', reviewSchema);

const characteristicsSchema = new Schema {}
let Characteristic = mongoose.model('Characteristic', characteristicsSchema);

const photosSchema = new Schema {
  photo_id: Number,
  photo_url: String,
}
let Photos = mongoose.model('Photos', photosSchema);

// compass community : mongoose <<>> pgadmin : postgres //
