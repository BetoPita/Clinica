const express = require('express');
let app = express();

//Puerto
process.env.PORT = process.env.PORT || 4000;

const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Crear la ruta

const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");

app.use(express.static(rootPath));

//DB CONECTION
require("./src/database/connection");


app.use(require('./routes/R_cliente'));

router.use((err,req,res,next)=>{
    if(err){
        return res.send(err.message);
    }
});

app.listen(process.env.PORT,err=>{
    if(err){
        console.log(`Error escuchar puerto: ${process.env.PORT}`);
    }

    console.log(`Escuchando puerto: ${process.env.PORT}`);
})