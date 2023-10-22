const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/Web';
mongoose.connect(dbURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).catch(err => {console.log('Connection error', err.message);});

// Get information product from database that already exists, no need to create a new one
const ProductSchema = new mongoose.Schema({
    id: Number,
    img: String,
    name: String,
    price: Number,
    type: String,
    AddOn: Array
});

const Product = mongoose.model('Product', ProductSchema, 'products');

module.exports = Product;

