var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res) {
  queries.getAllUsers().then(users =>{
    res.json(users)
  })

});
module.exports = router;
