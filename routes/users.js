const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const USERS_PATH = path.join(__dirname, '..', 'data', 'users.json');

async function readUsers() {
  const data = await fs.readFile(USERS_PATH, 'utf8');
  return JSON.parse(data);
}

router.get('/', async (req, res, next) => {
  try {
    const users = await readUsers();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const users = await readUsers();
    const user = users.find((u) => u.id === req.params.id);

    if (!user) {
      return res.status(404).send({ message: 'ID de usuario no encontrado' });
    }
    return res.send(user);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
