const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const CARDS_PATH = path.join(__dirname, '..', 'data', 'cards.json');

async function readCards() {
  const data = await fs.readFile(CARDS_PATH, 'utf8');
  return JSON.parse(data);
}

router.get('/', async (req, res, next) => {
  try {
    const cards = await readCards();
    res.send(cards);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
