var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// POST ratings
router.post('/', function(req, res, next) {
  console.log(req.body.rating)
});

module.exports = router;
