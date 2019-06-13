var mongoose = require('mongoose');

var user = 'harry';
var password = 'azerty12';
var port = 61716;
var bddname = 'faceup';

var options = { connectTimeoutMS: 5000, useNewUrlParser: true }

mongoose.connect(
  "mongodb://"+user+":"+password+"@ds2"+port+".mlab.com:"+port+"/"+bddname,
  options,
  function(error){
    console.log(error);
  }
);
