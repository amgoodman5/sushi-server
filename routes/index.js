var express = require('express');
var router = express.Router();
var queries = require('../db/queries');




router.get('/all', function(req, res) {
  queries.getAllUsers().then(users =>{
    res.json(users)
  })

});

router.post('/users', (res, req) =>{
  queries.getUserByEmail(req.body.email)
  .then(user => {
    res.json(users)
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
