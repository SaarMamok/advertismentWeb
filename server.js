var express = require('express')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var app = express()
var port = 8080
var path =require('path')
const { debugPort } = require('process')



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
const DBNAME = "Advertisements";
const DB_USERS = "Admins";
app.set("view engine","ejs");

app.use('/public', express.static('public'));

var advertisementList1=[
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
  },
// screen = 2
{
  title:"NIKE",
  content:"JUST DO IT",
  style:"https://as2.ftcdn.net/v2/jpg/04/02/95/13/1000_F_402951349_kddXJErU5Y2rbgwCMuAkEFhlSnQTgHIH.jpg",
  time:5000,
  screenNumber:2
},
{
  title:"ADIDAS",
  content:"RUN FASTER",
  style:"https://as1.ftcdn.net/v2/jpg/04/40/72/76/1000_F_440727637_LdLWk4YgwdUFtb9U6YPI1tjoJrBEnWyq.jpg",
  time:3000,
  screenNumber:2
},
{
  title:"PUMA",
  content:"SPORTS LIVING",
  style:"https://as2.ftcdn.net/v2/jpg/03/26/64/11/1000_F_326641117_eLFmcZEtjbvgZGt7EsxGx5WJ6iiGane5.jpg",
  time:4000,
  screenNumber:2
},
{
  title:"REEBOK",
  content:"TRAIN HARD",
  style:"https://as2.ftcdn.net/v2/jpg/04/03/74/97/1000_F_403749704_6ksVq7Su2nhlARXkt90Tvi9SVMiGF2gB.jpg",
  time:4000,
  screenNumber:2
},
{
  title:"UNDER ARMOUR",
  content:"SPORTS LIVING",
  style:"https://as1.ftcdn.net/v2/jpg/03/42/56/20/1000_F_342562062_6idHhTR0NYrYsaMLXTrWk1pbELojm5gj.jpg",
  time:4000,
  screenNumber:2
},

  //screen = 3
  {
    title:"AUDI",
    content:"DRIVING IN STYLE",
    style:"https://as2.ftcdn.net/v2/jpg/02/78/78/59/1000_F_278785930_AXMsvsjP5nYJaZykCSFdWnqGkaRzboMc.jpg",
    time:3000,
    screenNumber:3
  },
  {
    title:"MERCEDEZ",
    content:"DRIVING WITH CLASS",
    style:"https://as1.ftcdn.net/v2/jpg/03/08/73/14/1000_F_308731491_DlnGiXGy2fS5bT2QKCpSpLfgCtqlPaKT.jpg",
    time:5000,
    screenNumber:3
  },
  {
    title:"BUGGATI",
    content:"BE THE FASTES ON ROAD",
    style:"https://as2.ftcdn.net/v2/jpg/02/95/43/31/1000_F_295433165_dUeCPXFNuUHVjgWEdjlhYAURlQOug4O9.jpg",
    time:3000,
    screenNumber:3
  },
  {
    title:"TOYOTA",
    content:"LIVING LONGER",
    style:"https://as2.ftcdn.net/v2/jpg/03/00/48/11/1000_F_300481162_hbPypB18TiD92H4qPdlo7Yk8unJ4xaEV.jpg",
    time:5000,
    screenNumber:3
  },
  {
    title:"FERRARI",
    content:"BE THE HORSE YOU WANT",
    style:"https://as1.ftcdn.net/v2/jpg/02/98/35/82/1000_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",
    time:3000,
    screenNumber:3
  }

];


var Screen1 = 0, Screen2=0,Screen3=0;


MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("mydb");

  //Check if collection exists if not, generate one
  dbo.listCollections().toArray(function(err,collections){
    var DBNAME_exist = false;
    var DB_USERS_exist = false;
    for(var i=0;i<collections.length;i++){
      if(collections[i].name==DBNAME){
        DBNAME_exist=true
      }
      if(collections[i].name==DB_USERS){
        DB_USERS_exist=true
      }
    }
      if(DBNAME_exist ==false){
        dbo.collection(DBNAME).insertMany(advertisementList1, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          });
      }
      if(DB_USERS_exist ==false){
        var  default_admin = "admin";
        var default_password= "123456";
        var admin_default = {"username": default_admin,"password":default_password};
      
        dbo.collection(DB_USERS).insertOne(admin_default, function(err, res) {
          if (err) throw err;
          console.log("admin document inserted");
          });
      }
  });

  //Home page
  app.get('/', (req,res)=>{
    res.render("login.ejs");
    
  })

  // Go after login 
  app.get('/management', (req,res)=>{
    dbo.collection(DBNAME).find({}).toArray(function(err,result){
      if (err) throw err;
      res.render("management.ejs",{data: JSON.stringify(result)});
    })
  })

  // Upload Screen and check which screen is on 
  app.get('/screen=:num', (req, res) => {
    var query = {screenNumber:1};
    if(req.params.num==1){
      dbo.collection(DBNAME).find(query).toArray(function(err, result) {
          if (err) throw err;
          res.render("index1.ejs", {data: JSON.stringify(result)});
        });
        Screen1+=1;
    }
    else if(req.params.num==2){
      var query = {screenNumber:2};
      dbo.collection(DBNAME).find(query).toArray(function(err, result) {
        if (err) throw err;
        res.render("index1.ejs", {data: JSON.stringify(result)});
      });
      Screen2+=1;
        
    }
    else if(req.params.num==3){
      var query = {screenNumber:3};
      dbo.collection(DBNAME).find(query).toArray(function(err, result) {
        if (err) throw err;
        res.render("index1.ejs", {data: JSON.stringify(result)});
      });
      Screen3+=1;
    }
  })
  var admin_login=false;
  // Login User
  var router = express.Router()
  app.use("/",router);
  router.post('/api/login', jsonParser,async (req, res) => {
    dbo.collection(DB_USERS).findOne({}, function(err, result){
      if (err) throw err;
      if (req.body.username != String(result.username) || req.body.password != String(result.password) ){
        res.json({status: 'error', error: 'Invalid username/password'});
      }
      else{
        admin_login=true;
        res.json({status: 'Login Successfully', address:'http://127.0.0.1:8080/management' });
      }
    })
  })

  // Change Admin username password
  router.post('/api/change_username_password',jsonParser, async (req, res) => {
    var new_username_passowrd  ={ $set: {username: req.body.username, password: req.body.password } };
    dbo.collection(DB_USERS).findOneAndUpdate({},new_username_passowrd, function (err, obj){
      if (err) throw err;
      console.log("Admin username/password changed");
    })
    res.json({status: 'Username/Password Changed'
  });
  })

 

  // Delete Advertisment
  router.post('/api/delete_adv', jsonParser,async (req, res) => {
      var query_delete_id = {title : req.body.title };
      dbo.collection(DBNAME).deleteOne(query_delete_id, function (err, obj){
        if (err) throw err;
        console.log("One advertisment deleted");
      })
      res.json({status: 'Advertisement Deleted'
    });
  })

  // Check if Screen is off
  router.post('/api/screenoff', jsonParser,async (req, res) => {
    if(req.body.screen===1){
      Screen1--;
    }
    if(req.body.screen===2){
      Screen2--;
    }
    if(req.body.screen===3){
      Screen3--;
    }
      res.json({status: 'screen changed'
    });
  })


  // Edit Advertisment
  router.post('/api/edit_adv', jsonParser,async (req, res) => {
    itemId = req.body.id
    var mongosss = require('mongodb');
    var o_id = new mongosss.ObjectID(itemId);

    dbo.collection(DBNAME).findOne({'_id': o_id},function(err, obj){
      if (err) throw err;
        console.log(obj);

      var new_query_edit = { $set: { title : req.body.title, content: req.body.content, style: req.body.style, time: parseInt(req.body.time), screenNumber: parseInt(req.body.screenNumber) } };
      dbo.collection(DBNAME).findOneAndUpdate(obj, new_query_edit,  function (err, obj){
      if (err) throw err;
      console.log("One advertisment changed");
    })

    })

      res.json({status: 'Advertisement Changed'
    });
  })
  //check if admin logged in
  router.post('/api/checkAdvOnline',async (req, res) => {
    var adv_onlive=[];
    if(Screen1!=0){
      adv_onlive.push("screen1")
    }
    if(Screen2!=0){
      adv_onlive.push("screen2")
    }
    if(Screen3!=0){
      adv_onlive.push("screen3")
    }
    console.log(adv_onlive)
      res.json({data: JSON.stringify(adv_onlive)
    });
  })
  // Add Advertisment
  router.post('/api/add_adv', jsonParser,async (req, res) => {
    var query_add_id = {
          title : req.body.title,
          content: req.body.content,
          style: req.body.style,
          time: parseInt(req.body.time),
          screenNumber: parseInt(req.body.screenNumber)
    };
    dbo.collection(DBNAME).insertOne(query_add_id, function (err, obj){
      if (err) throw err;
      console.log(obj);
      console.log("One advertisment added");
    })
      res.json({status: 'Advertisement added'
    });
  })
  
  router.post('/api/login_check',async (req, res) => {
   if(admin_login==true){
      res.json({status:'true' });
   }
   else{
    res.json({status:'false',address:'/' });
 }
  })


});

app.listen(port)
