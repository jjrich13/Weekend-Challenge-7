var express = require('express');
var router = express.Router();
const pool = require('../modules/pool.js');


// GET Route
router.get('/', function (req, res) {
    pool.query()
    .then( response => {
        res.send(response.rows);
    })
    .catch(err => {
        res.sendStatus(500);
    })
    
}); // END GET Route

//POST route
router.post('/', function (req, res) {
    console.log(req.body);
    
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then( response => {
        res.sendStatus(200);
    })
    .catch(err => {
        res.sendStatus(500);
        
    })
    
});

module.exports = router;