const express = requeri('express')
const app = express()
const { mongoose } = require ('./database')
//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/api/users', require('./routes/user.routes'))

//Starting the server
app.listen(app.get('port'), ()=> {
  console.log('Server on port 3000'
  )}
)