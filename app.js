require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejslayout = require('express-ejs-layouts');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

// app.use(ejslayout);
app.set('views','./views');
app.set('view engine','ejs');

app.use('/',require('./routes/news'));

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});



