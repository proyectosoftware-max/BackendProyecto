const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./modelo/conexion');
const ruta = require('./controlador/controlador');


//const url = 'http://localhost:3000';

const url = 'https://banco-89al.onrender.com';


  app.use(cors({
    origin: url
  }));
  
  app.use(express.json());
  app.use('/api/', ruta);
  

  const PORT = process.env.PORT|| 5000;


  app.get('/', (req, res) => {
    res.send('El servidor ha iniciado con exito!');
  });

  app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=()');
    next();
  });

  app.listen(PORT, ()=>{
   console.log(`Servidor Iniciado en el puerto ${PORT}`);
  });