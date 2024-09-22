const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./modelo/conexion');
const ruta = require('./controlador/controlador');

// Lista de URLs permitidas
const allowedOrigins = ['https://banco-wuei.onrender.com', 'https://bancoaerolinea.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir solicitudes sin origen (como desde Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true // Si usas cookies o sesiones
}));

app.use(express.json());
app.use('/api/', ruta);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('El servidor ha iniciado con éxito!');
});

app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=()');
  next();
});

app.listen(PORT, () => {
  console.log(`Servidor Iniciado en el puerto ${PORT}`);
});
