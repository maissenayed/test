var express = require('express');
var router = express.Router();

/* GET home page. */
//get poi product Api
router.get('/', function(req, res, next) {
    res.status(200).json({message: 'unimplemented'});
});
//buy poi product Api
router.post('/buy', function(req, res, next) {
    res.status(200).json({message: 'POI product has been purchased '});
});


module.exports = router;
