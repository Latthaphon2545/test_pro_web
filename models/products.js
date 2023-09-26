// use mongoose
const mongoose = require('mongoose');

// connect to MongoDB
const dbURI = 'mongodb://localhost:27017/productDB';
mongoose.connect(dbURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).catch(err => console.log(err));

// create a schema
let productSchema = mongoose.Schema({
    id: Number,
    img: String,
    name: String,
    price: Number,
    type: String,
    addon: Array,
});

// create a model
let Product = mongoose.model('products', productSchema);

// export the model
module.exports = Product;

// save a new document
module.exports.saveProduct = function(model, data){
    model.save(data)
}
