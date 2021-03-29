const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

const profile = {
    name: 'User123',
    avatar: 'no avatar',
    "monthly-budget": 1,
    "days-per-week": 1,
    "hours-per-day": 1,
    "vacation-per-year": 1,
}

routes.get('/',         (req, res) => res.render(`${views}index`   ))
routes.get('/job',      (req, res) => res.render(`${views}job`     ))
routes.get('/job/edit', (req, res) => res.render(`${views}job-edit`))
routes.get('/profile',  (req, res) => res.render(`${views}profile`, { profile: profile }))

module.exports = routes