const router = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users');
const fs = require('fs').promises;
const path = require('path');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);

const USERS_PATH = path.join(__dirname, '..', 'data', 'users.json');

async function readUsers() {
  const data = await fs.readFile(USERS_PATH, 'utf8');
  return JSON.parse(data);
}

// GET /users lista todos los usuarios
router.get('/', async (req, res, next) => {
  try {
    const users = await readUsers();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
});

// Endpoint para obtener un usuario por ID

router.get('/:id', async (req, res, next) => {
  try {
    const id = String(req.params.id || '').trim();
    const users = await readUsers();
    const user = users.find((u) => String(u._id || '').trim() === id);

    if (!user) {
      return res.status(404).json({ message: 'ID de usuario no encontrado' });
    }
    return res.json(user);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
