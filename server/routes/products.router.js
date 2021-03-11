const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/new_albums', (req, res) => {
  console.log('in get new albums')
    const sqlText = `SELECT * FROM albums
                    ORDER BY release_date DESC LIMIT 10;`
    pool
      .query(sqlText)
      .then((result) => {
          res.send(result.rows)
      })
      .catch((err) => {
          console.log("GET products err", err);
          res.sendStatus(500);
      });
});

module.exports = router;

// lalala laaaa