const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const productrouter = require('./routes/product')
const auth = require('./routes/users')
const order = require('./routes/order')
const Category = require('./routes/category')
const cloudinary = require('cloudinary')
const cors = require('cors')
require('./models/config/config')
require("dotenv").config();

app.use(cookieParser());
app.use(express.json())
app.use(cors())
// 
cloudinary.config({
    cloud_name: "dsj9t6adh",
    api_key: "998169537827179",
    api_secret: "OdZZJsvvLEd6rrDWQb0VqQVFFFg"
})

//
app.use('/api', productrouter)
app.use('/api', auth);
app.use('/api', order)
app.use('/api',Category)
// schemaName.index({ request: 'text' });
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})