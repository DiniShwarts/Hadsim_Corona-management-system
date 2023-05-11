const Personal_detail = require('../models/personal_details.model.js')
const getAllPersonal_details = (req, res) => {
    Personal_detail.find()
        .then(Personal_details  => {
            res.send(Personal_details )
        }).catch(err => {
            console.log(err)
        })
}

const addPersonal_details = (req, res) => {
    const newDetail = new Personal_detail(req.body)
    newDetail.save()
        .then(Personal_details => {
            res.send(Personal_details)
        }).catch(err => {
            console.log(err)
        })
}




module.exports = { getAllPersonal_details , addPersonal_details }