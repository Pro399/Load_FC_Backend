const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const {connectDB} = require('./config/db')
const cors = require('cors')
const port = process.env.PORT || 5000


//Connect to mongo database
connectDB()

const app = express()

//CORS
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//JSON encoding
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Base path for api
app.use('/api/loadfc', require('./routes/loadfcRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started at port ${port}`.yellow)
})



