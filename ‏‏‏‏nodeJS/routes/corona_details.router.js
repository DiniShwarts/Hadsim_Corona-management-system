const corona_detail = require('express').Router()
const corona_details = require('../controllers/corona_details.controller')

corona_detail.get('/', corona_details.getAllCorona_detail)
corona_detail.post('/', corona_details.addCorona_detail)


module.exports = corona_detail