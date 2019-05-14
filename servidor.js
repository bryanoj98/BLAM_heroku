const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'Login/Login.html'));
});
app.get("/Login*", function(req, res) {
  res.sendFile(path.join(__dirname, '/Login/'+req.params[0]));
  // console.log(req.params[0]);
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
