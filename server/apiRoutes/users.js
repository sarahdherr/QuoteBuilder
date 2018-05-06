const router = require('express').Router()
const User = require('../../db/models').User

// matches GET requests to `/api/users`
router.get('/', function (req, res, next) {
  User.findAll()
    .then(users => res.send(users))
    .catch(next)
})

module.exports = router