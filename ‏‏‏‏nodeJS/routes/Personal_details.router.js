const Personal_detail = require('express').Router()
const Personal_details = require('../controllers/personal_details.controller')

Personal_detail.get('/', Personal_details.getAllPersonal_details )
Personal_detail.post('/', Personal_details.addPersonal_details)


module.exports = Personal_detail