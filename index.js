const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/message', (req, res) => {
  res.json({ message: 'Hello World from api!'})
})


app.listen(port, () => {
  console.log(`hello-world-api app started on port ${port}`)
})