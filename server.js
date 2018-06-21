const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/user')
const posts = require('./routes/api/posts')
const profile = require('./routes/api/profile')

const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Mongo ERROR RANE ', err))

app.get('/', (req, res) => res.send('Hello Yo'))

// Use routes
app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/profile', profile)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
