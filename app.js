var express = require("express"),
    app     = express();


app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/" , function(req ,res){
    res.render("home.ejs");
});

    
app.listen(8080 , function(req ,res){
    console.log("PFP Server has Started!!");
});

