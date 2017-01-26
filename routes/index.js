var express = require('express');
var router = express.Router();
var queries = require('../db/queries');




router.get('/all', function(req, res) {
  queries.getAllUsers().then(users =>{
    res.json(users)
  })

});

router.get('/sushi', function(req, res) {
  console.log("sdfasfa");
  queries.getAllSushi().then(sushi =>{
    res.json(sushi)
  })

});

router.post('/sushi', function(req, res) {
queries.getSingleSushiById(sushi).insert({
    sushi_name: req.body.sushi_name,
    sushi_type: req.body.sushi_type,
    sushi_fish: req.body.sushi_fish,
    sushi_difficulty: req.body.sushi_difficulty,
    users_id:req.body.users_id
  })
  .then(sushi => {
      res.send(sushi);
  });
})

router.get('/sushi/:id', function(req, res) {
  queries.getSingleSushiById(req.params.id)
    .then((sushi) => {
      res.json(sushi);
    });
});

router.put('/sushi/:id', function(req, res){
        queries.getUpdateSushi(req.params.id)
            .then((sushi) => {
                res.json(sushi);
            });
    });


    router.put('/sushi/:id', function(req, res){
            queries.getUpdateSushi(req.params.id)
                .then((sushi) => {
                    res.json(sushi);
                });
        });


        router.delete('/sushi', function(req, res) {
    queries.deleteSushi(req.params.id)
        .then(() => {
            res.json('sushi Deleted');
        });
});




router.post('/users', (res, req, next) =>{
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
