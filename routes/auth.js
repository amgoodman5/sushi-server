const express = require('express');
const router = express.Router();
const queries = require('../db/queries')


router.post('/signup',(req,res, next)=> {
  if(validUser(req.body)){

  }else{
   next(neew Error('invalid user'))

  }
})
module.exports = router;
