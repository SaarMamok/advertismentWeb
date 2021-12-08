var express = require('express')
//var app = express.createServer()
var app = express()

var port = 8080

app.get(myUrl, (req, res) => {
  res.send('Hello World!')

//   console.log(req.params)
//   if(req.query("screen") == 3)
//     res.send('amit')

//   else if (req.query("screen") == 1)
//     res.send('this is 1')
})

app.get('/screen=3', (req,res) => {
    res.send('karin')

})


app.listen(port)
