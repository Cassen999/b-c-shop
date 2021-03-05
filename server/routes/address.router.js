const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Gets logged in user's mailing address
router.get('/mailing', rejectUnauthenticated, (req, res) => {
  const id = req.user.id;
  const sqlText = `SELECT address, city, first_name, last_name, state, zip 
                    FROM "ship_address" sa
                    WHERE user_id = $1;`
  pool
    .query(sqlText, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("GET mailing address error ", err);
      res.sendStatus(500);
    });
})

// Gets logged in user's billing address
router.get('/billing', rejectUnauthenticated, (req, res) => {
  const id = req.user.id;
  const sqlText = `SELECT address, city, first_name, last_name, state, zip
                    FROM "bill_address" ba
                    WHERE user_id = $1;`
  pool
    .query(sqlText, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("GET billing address error ", err);
      res.sendStatus(500);
    });
});

module.exports = router;