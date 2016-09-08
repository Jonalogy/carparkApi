var express = require('express');
var path = require('path');
var app = express;

app.get('/',function(req,res){
  res.send("Root Server Successfully Loaded!");
});

app.listen(3000);
