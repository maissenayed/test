var express = require('express');
var router = express.Router();

/* GET home page. */
//get poi Api
router.get('/', function(req, res, next) {
    res.status(200).json({message: 'unimplemented'});
});
//add poi Api
router.post('/', function(req, res, next) {
    res.status(201).json({message: 'unimplemented'});
});
//edit poi Api
router.put('/', function(req, res, next) {
    res.status(200).json({message: 'unimplemented'});
});
//delete poi Api
router.delete('/', function(req, res, next) {
    res.status(200).json({message: 'unimplemented'});
});

module.exports = router;
