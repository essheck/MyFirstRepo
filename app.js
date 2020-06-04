let express = require("express"),
    app     = express(),
    mongoose = require("mongoose");

// App setup
app.use(express.static("public"));
app.set("view engine", "ejs");

//Mongoose Setup
mongoose.connect('mongodb://localhost/new_database');

//Schema Setup
let categorySchema = new mongoose.Schema({
    name: String
});


let productSchema = new mongoose.Schema({
   name: String , 
   features: [String] ,
   rate: { type: Number , required: [true , "Why no rate???"]}, 
   imageUrl: String , 
   category: String
});

var Product = mongoose.model('product' , productSchema);
var Category = mongoose.model("category" , categorySchema);

var navratan = new Product({
    name: "Navratan" , 
    features: ["Spicy" , "Tasty"] , 
    rate: 50 ,
    category: "Namkeen"
});

navratan.save((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(navratan);
    }
});

Product.create({name: "chana-dal" , rate: 90} , (err , newProduct) => {
    if(err) {
        console.log(err);
    } else {
        console.log("=============================");
        console.log(newProduct);
    }
});
//Routes

//HOME
app.get("/" , function(req ,res){
    res.render("home.ejs" , {product: navratan});
});

//About
app.get("/about", function(req, res){
    res.render("about.ejs");
});



    
app.listen(8080 , function(req ,res){
    console.log("PFP Server has Started!!");
});

