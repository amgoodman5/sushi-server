var express = require('express');
var router = express.Router();
const knex = require('./knex');
const bcrypt = require('bcrypt');



function getAllSushi() {
    return knex('sushi');
}


function getSingleSushiById(id) {
    return knex('sushi')
        .select()
        .where('id', id)
        .first()
}

function getUpdateSushi(id) {
    return knex('sushi')
        .select()
        .where('id', id)
    update()

}

function deleteSushi(id) {
    return knex('sushi')
        .where('id', id)
        .del();
}

function getAllUsers() {
    return knex('users');
}

function getUserByEmail(email) {
    return knex('users')
        .where('email', email)
        .first();
}

function getId(id) {
    return knex("users")
        .where('id', id)
        .first()
}

function newUser(users) {
    return knex("users")
        .insert(users, "*")
}





module.exports = {
     deleteSushi,
    getUpdateSushi,
    getSingleSushiById,
    getAllSushi,
    getAllUsers,
    getUserByEmail,
    getId,
    newUser
}
