const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login',(req,res) => {
    res.send("hello")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 