var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('galeria', { 
    isGaleria: true //con esto le decimos que al posicionar en la seccion galeria, que resaltada
   });
});

module.exports = router;
