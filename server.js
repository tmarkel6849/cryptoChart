require('dotenv').config()

const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path')

const app = express(),
      PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
