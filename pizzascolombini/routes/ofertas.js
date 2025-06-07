var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('ofertas');
// });

router.get('/', function(req, res) {
  res.render('ofertas');
});


module.exports = router;