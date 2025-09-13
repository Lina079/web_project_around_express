const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;
let cacheUserId = null;


app.use(express.json());

//conexion a MongoDB
mongoose.connect('mongodb://localhost:27017/aroundb')
.then(() => console.log('Conectado a aroundb'))
.catch((err) => {
console.error('Error de conexión a MongoDB:', err.message);
process.exit(1);
});

// Middleware para simular la autenticación

app.use(async (req, res, next) => {
  try {
    if (!cacheUserId) {
      const user = await User.findOne().select('_id').lean();
      if (!user) {
        return res
          .status(500)
          .json({ message: 'No hay usuarios en la base de datos. Crea uno con POST /users' });
      }
      cacheUserId = String(user._id);
      console.log('Usuario simulado:', cacheUserId);
    }
    req.user = { _id: cacheUserId };
    next();
  } catch (err) {
    next(err);
  }
});

// Rutas
app.use('/', routes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  if(err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Datos de usuario no válido' });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'ID de usuario no válido' });
  }
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.error(err);
  return res.status(500).json({ message: 'Error interno del servidor' });
}
);
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
