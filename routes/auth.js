const express = require('express');
const router = express.Router();
const queries = require('../db/queries')


router.post('/signup',(req,res, next)=> {
  var hash = bcrypt.hasSynch(req.params.password, 10);


  }else{
   next(neew Error('invalid user'))

  }
})
module.exports = router;
