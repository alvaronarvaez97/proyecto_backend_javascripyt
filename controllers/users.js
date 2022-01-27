const express = require('express')
const mysql = require('mysql2');
const router = express.Router;


//listar todo
const findAllUser =(req, res)=>{
    req.getConnection((err,conn)=>{
        if (err) return(err);

        conn.query('SELECT * FROM product', (err, rows)=>{
            if (err) return (err);

            res.json(rows);
        })
    })
}

module.exports = {findAllUser}; 