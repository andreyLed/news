const express = require('express');

const router = express.Router();
const db = require('../news.json');

function getIndex(arr, id) {
  return arr.findIndex(item => item.id === Number(id));
}
router.get('/', (req, res) => {
  res.status(200);
  res.send(db.news);
});

router.get('/:id', (req, res) => {
  const index = getIndex(db, req.param.id);
  if (index === -1) {
    res.status(404).send('404');
  } else {
    res.status(200);
    res.json(db.cards[index]);
  }
});

module.exports = router;
