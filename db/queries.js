var express = require('express');
var router = express.Router();
const knex = require('./knex');
const bcrypt = require('bcrypt');


  function getAllUsers() {
        return knex('users');
    }

     function getUserByEmail(email) {
        return knex('users')
        .where('email', email)
        .first();
    }
   function getUserByID(id) {
        return knex("users")
          .where('id', id)
            .first()
    }
   function newUser(users) {
        return knex("users")
            .insert(users, "*")
    }





module.exports = {
getAllUsers,
getUserByEmail
}
