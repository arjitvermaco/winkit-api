const Database = require('./utils/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//import routes
const categoryRoutes = require('./routes/categories');
app.use('/categories',categoryRoutes);



const port = 4000;
app.listen(port,()=>{
    console.log("Server has started");
})