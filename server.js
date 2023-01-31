const express = require('express');
const bodyParser= require('body-parser')
const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
    console.log('listening on 3000')
  })
  // We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/',(req, res)=> {
    res.sendFile(__dirname + '/index.html')
    
    // do something here
  })
    // We normally abbreviate `request` to `req` and `response` to `res`.
app.post('/quotes',(req, res)=> {
    console.log(req.body)
    // do something here
  })
