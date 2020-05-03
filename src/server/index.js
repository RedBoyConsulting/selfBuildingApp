<<<<<<< HEAD
const express = require('express')
=======
//import mongoose from 'mongoose'
import express, { json } from 'express'
>>>>>>> 74f7a4783adb14fc5f7edf72df975f3b5038a1df
const app = express()
//const { mongoose } = require ('./database')
//var morgan = require('mongoose-morgan');

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
//app.use(morgan('dev'))
app.use(json())

//Routes
//app.use('/api/users', require('./routes/user.routes'))
//connectionString : '{mongo_url}'

//Starting the server
app.listen(app.get('port'), ()=> {
  console.log('Server on port 3000'
  )}
)