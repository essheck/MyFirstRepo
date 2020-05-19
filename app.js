var express = require("express"),
    app     = express();


app.get("/" , function(req ,res){
    res.send("This will be the home Page");
});

    
app.listen(8080 , function(req ,res){
    console.log("PFP Server has Started!!");
});

