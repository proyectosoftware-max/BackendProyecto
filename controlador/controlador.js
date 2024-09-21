const express = require('express');
const router = express.Router();
const Usuario = require('../modelo/esquema');


router.post('/agregar', async (req, res) => {

  const usuario = new Usuario(req.body);

  try {
    const nuevoDato = await usuario.save();
    res.status(201).json(nuevoDato);
    console.log('Datos: ' + nuevoDato);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

router.get('/lista', async (req, res) => {
  try {
    const datos = await Usuario.find();
    res.json(datos);

  } catch (error) {
    res.status(500).json({ error: error.message });

  }

});

router.get('/obtenerdatosId/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const datos = await Usuario.findById(id);
    if (!datos) {
      return res.status(404).json({ error: 'Datos no encontrado' })
    }
  res.json(datos);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/actualizar/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const datos = await Usuario.findByIdAndUpdate(id, req.body);
 
    if (!datos) {
      return res.status(404).json({ error: 'Dato no encontrado' })
      
    }
    res.json(datos);

  } catch (error) {
    res.status(500).json({ error: error.message });

  }
});

router.delete('/eliminar/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const datos = await Usuario.findByIdAndDelete(id);
    if (!datos) {
      return res.status(404).json({ error: 'Dato no encontrado' });
    }
    res.json(datos);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

module.exports = router

