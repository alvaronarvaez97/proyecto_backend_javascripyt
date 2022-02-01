const express = require('express');
const conn = require('express-myconnection');
const mysql = require('mysql2');
const User = require('./api/User')

//setting server
const app = express();

app.use(express.json());

app.set('port', process.env.PORT|| 9000);

//database
const dbOption = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: 'inventario_productos'
}

//middelwares
app.use(conn(mysql, dbOption,'single'));    //api para conexion simple con db mysql

// endpoint
app.use('/api/User',User);



app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo en puerto: ',app.get('port'));
})



