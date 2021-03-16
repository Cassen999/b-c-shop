const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/new_albums', (req, res) => {
    const sqlText = `SELECT * FROM albums`
                    // ORDER BY release_date DESC LIMIT 12;`
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

// GET selected album
router.get('/:id', (req, res) => {
  console.log('in GET selected album');
  const id = req.params.id;
  const sqlText = `SELECT * FROM "albums"
                    WHERE albums.id = $1;`
  pool
    .query(sqlText, [id])
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.log('error in GET selected album', error);
      res.sendStatus(500);
    })
})
module.exports = router;