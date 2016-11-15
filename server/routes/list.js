const express = require('express');

const router = express.Router();
const db = require('../news.json');

function getIndex(arr, id) {
  return arr.findIndex(item => item.id === Number(id));
}

function getTitles(arr) {
  return arr.map(item => ({
    id: item.id,
    title: item.title
  }));
}

router.get('/', (req, res) => {
  if ({}.hasOwnProperty.call(db, 'news') && Array.isArray(db.news) && db.news.length > 0) {
    res.status(200);
    res.send(getTitles(db.news));
  } else {
    res.status(404);
    res.send('404');
  }
});

router.get('/:id', (req, res) => {
  const index = getIndex(db.news, req.params.id);
  if (index === -1) {
    res.status(404).send('404');
  } else {
    res.status(200);
    res.json(db.news[index]);
  }
});

module.exports = router;
