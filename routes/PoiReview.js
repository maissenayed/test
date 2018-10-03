var express = require('express');
var router = express.Router();

/* GET home page. */
//get poi review Api
router.get('/', function(req, res, next) {
    res.status(200).json({message: 'unimplemented'});
});
//add poi review Api
router.post('/', function(req, res, next) {
    res.status(201).json({message: 'unimplemented'});
});
//edit poi review Api
router.put('/', function(req, res, next) {
    res.status(200).json({message: 'unimplemented'});
});
//delete poi review Api
router.delete('/', function(req, res, next) {
    res.status(200).json({message: 'unimplemented'});
});

module.exports = router;
