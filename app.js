const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3400

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const exec = require('child_process').exec

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  let jsonParse = JSON.parse(req.body.payload)
  console.log(jsonParse.ref)
  
  if(jsonParse.ref === "refs/heads/master") {
    exec('sh /root/play-webhook/run.sh')
    res.send(`Automation CICD running at ${new Date()}`)
  } else {
    res.send(`Nothing to build & deploy`)
  }

})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
