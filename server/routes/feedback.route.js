var express = require('express');
var router = express.Router();
// var galleryItems = require('../modules/gallery.data');
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

router.post('/', function (req, res) {
    console.log(req.body);
    
    pool.query()
    .then( response => {
        res.sendStatus(200);
    })
    .catch(err => {
        res.sendStatus(500);
        
    })
    
});

module.exports = router;