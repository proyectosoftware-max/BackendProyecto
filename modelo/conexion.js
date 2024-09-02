const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 segundos de timeout para seleccionar un servidor
    socketTimeoutMS: 45000, // 45 segundos de timeout para operaciones socket
}).then(()=>{
    console.log("base de datos iniciada");
}).catch(err =>{
    console.log(err)
})