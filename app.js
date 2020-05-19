var express = require("express"),
    app     = express();


app.use(express.static("public"));
app.set("view engine", "ejs");

//Routes

//HOME
app.get("/" , function(req ,res){
    res.render("home.ejs");
});

//About
app.get("/about", function(req, res){
    res.render("about.ejs");
});



    
app.listen(8080 , function(req ,res){
    console.log("PFP Server has Started!!");
});

