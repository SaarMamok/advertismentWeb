var express = require('express')
var app = express()
var port = 8080
var path =require('path')

app.get('/screen=:num', (req, res) => {
 if(req.params.num==1){
    res.sendFile(path.join(__dirname,'index.html'))
    res.sendFile(path.join(__dirname,'app.js'))
 }
 else if(req.params.num==2){

 }
 else if(req.params.num==3){

 }
})


app.listen(port)
