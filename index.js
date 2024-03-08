const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(express.json()) //json
app.use(express.raw()) // ?
app.use(express.text()) //text
app.use(express.urlencoded({ extended: true })) //form data or url-encoded
app.use(cors())

const message = [];

app.get('/message', (req, res) => {
  res.json({ message: 'Hello World from api!'})
})

app.post('/message', (req, res) => {
  if(req.body) {
    message.push(req.body)
  }
  res.status(201).json({ message: 'Message created!'});
})

app.get('/message/all', (req, res) => {
  res.json(message);
})


app.listen(port, () => {
  console.log(`hello-world-api app started on port ${port}`)
})