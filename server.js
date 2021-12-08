var express = require('express')
var app = express()
var port = 8080
var path =require('path')


app.use('/javascriptfiles',express.static(path.join(__dirname,'javascriptfiles')))
app.get('/screen=:num', (req, res) => {
 if(req.params.num==1){
    res.sendFile(path.join(__dirname,'index1.html'))
 }
 else if(req.params.num==2){
   res.sendFile(path.join(__dirname,'index2.html'))
 }
 else if(req.params.num==3){
   res.sendFile(path.join(__dirname,'index3.html'))
 }
})


app.listen(port)
