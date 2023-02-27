const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7000

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static(__dirname + "/style"));
app.get('/', (req, res) => {
  res.render('main', { title: 'Greetings from Pug' })
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
app.get('/', (req, res) => {
    res.render('home')
  })
  
  