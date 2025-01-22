const express = require('express')
const app = express()

app.post('/user/signup', (req, res) => {
  res.send({
    message: "signup endpoint"
  })
})

app.post('/user/signin', (req, res) => {
    res.send({
      message: "signin endpoint"
    })
  })

  app.get('/course/preview', (req, res) => {
    res.send({
      message: "signup endpoint"
    })
  })

  app.post('/course/purchase', (req, res) => {
    res.send({
      message: "signup endpoint"
    })
  })

  app.get('/user/purchases', (req, res) => {
    res.send({
      message: "signup endpoint"
    })
  })

app.listen(3000)