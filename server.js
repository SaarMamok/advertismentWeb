var express = require('express')
var app = express()
var port = 8080
var path =require('path')


app.use('/javascriptfiles',express.static(path.join(__dirname,'javascriptfiles')))
app.get('/screen=:num', (req, res) => {
 if(req.params.num==1){
    res.sendFile(path.join(__dirname,'index.html'))
 }
 else if(req.params.num==2){

 }
 else if(req.params.num==3){

 }
})


app.listen(port)
