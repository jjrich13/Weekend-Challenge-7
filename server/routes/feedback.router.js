var express = require('express');
var router = express.Router();
const pool = require('../modules/pool.js');


// GET Route
router.get('/', function (req, res) {
    
    pool.query(`SELECT * FROM "feedback"`)
    .then( response => {
        
        res.send(response.rows);
    })
    .catch(err => {
        res.sendStatus(500);
    })
    
}); // END GET Route

//POST route
router.post('/', function (req, res) {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then( response => {
        res.sendStatus(200);
    })
    .catch(err => {
        res.sendStatus(500);
        
    })
    
});

//DELETE route
router.delete('/:id', function (req, res) {
    
    
    pool.query(`DELETE FROM "feedback" WHERE "id" = ${req.params.id};`)
    .then( response => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500);
        
    })
    
});

module.exports = router;