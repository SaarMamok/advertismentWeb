var express = require('express')
var app = express()
var port = 8080
var path =require('path')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
const DBNAME = "Advertisements";


let advertisementList1=[
  {
    title:"Happy Hanuka",
    content:"Happy Hanuka",
    style:"https://www.hrus.co.il/wp-content/uploads/shutterstock_319097270.jpg",
    time:5000,
    screenNumber:1
  },
  {
    title:"Happy Purim",
    content:"Happy Purim",
    style:"https://i.ytimg.com/vi/r4qHbKexLak/maxresdefault.jpg",
    time:3000,
    screenNumber:1
  },
  {
    title:"Happy Passover",
    content:"Happy Passover",
    style:"https://www.gov.il/BlobFolder/news/news-25-03-21/he/news_2021_03_news-25-03-21.jpg",
    time:4000,
    screenNumber:1
  },
  {
    title:"Happy Shavuot",
    content:"Happy Shavuot",
    style:"https://i.ytimg.com/vi/-VNC2FDtlSk/maxresdefault.jpg",
    time:4000,
    screenNumber:1
  },
  {
    title:"Happy Sucot",
    content:"Happy Sucot",
    style:"https://as2.ftcdn.net/v2/jpg/02/22/78/69/1000_F_222786910_fb6u9Kq4X1Uzax8JQQbgYRgBTmq00GeV.jpg",
    time:5000,
    screenNumber:1
  }
];






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
  if(req.params.num==1){
    var query = {screenNumber:1};
    dbo.collection(DBNAME).find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    console.log(query);
    

     res.sendFile(path.join(__dirname,'index1.html'))
  }
  else if(req.params.num==2){
    res.sendFile(path.join(__dirname,'index2.html'))
  }
  else if(req.params.num==3){
    res.sendFile(path.join(__dirname,'index3.html'))
  }
 })
 




});




app.listen(port)
