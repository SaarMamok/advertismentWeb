//import {advertisementList1} from './data';

var express = require('express')
var app = express()
var port = 8080
var path =require('path')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
const DBNAME = "Advertisements";
app.set("view engine","ejs");

const advertisementList1 =JSON.parse(require('./data'));
console.log(advertisementList1);


MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.dropDatabase();
  
  dbo.collection(DBNAME).insertMany(advertisementList1, function(err, res) {
  if (err) throw err;
  console.log("1 document inserted");
  });
 ////////////////////////////////////////////////////////////
 app.use('/javascriptfiles',express.static(path.join(__dirname,'javascriptfiles')))
 app.get('/screen=:num', (req, res) => {
  var query = {screenNumber:1};
  if(req.params.num==1){
  
    dbo.collection(DBNAME).find(query).toArray(function(err, result) {
        if (err) throw err;
        res.render("index1.ejs", {data: JSON.stringify(result)});
      });
    
    //  res.sendFile(path.join(__dirname,'index1.html'))
  }
  else if(req.params.num==2){
    var query = {screenNumber:2};
    dbo.collection(DBNAME).find(query).toArray(function(err, result) {
      if (err) throw err;
      res.render("index1.ejs", {data: JSON.stringify(result)});
    });
    // res.sendFile(path.join(__dirname,'index2.html'))
  }
  else if(req.params.num==3){
    var query = {screenNumber:3};
    dbo.collection(DBNAME).find(query).toArray(function(err, result) {
      if (err) throw err;
      res.render("index1.ejs", {data: JSON.stringify(result)});
    });
    // res.sendFile(path.join(__dirname,'index3.html'))
  }
 })
 




});



app.listen(port)
