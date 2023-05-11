const Corona_detail = require('../models/corona_details.model.js')

const getAllCorona_detail = (req, res) => {
    Corona_detail.find()
        .then(Corona_details  => {
            res.send(Corona_details )
        }).catch(err => {
            console.log(err)
        })
}

const addCorona_detail = (req, res) => {
    const Cororna_vaccin = req.body;
    if(Cororna_vaccin.corona_vaccination_date!=null&&Cororna_vaccin.corona_vaccination_date.length>4)
    {
        res.send('error DateOfGettingVaccinated array length must be less than or equal to 4" ')
    }
    if(Cororna_vaccin.corona_vaccination_date!=null&&
        Cororna_vaccin.corona_vaccination_date.length!=Cororna_vaccin.vaccine_manufacturer.length)
            res.send('error ManufacturerVaccine array length must be equal to DateOfGettingVaccinated array length')
    
    if(Cororna_vaccin.date_receiving_positive_result>Cororna_vaccin.date_recovery_disease)
    res.send('DateOfRecovery cant be before DateOfResult')
    console.log('a')
    const newCorona_detail = new Corona_detail(req.body)
    console.log("b")
    newCorona_detail.save()
        .then(Corona_detail => {  
            res.send(Corona_detail)
        }).catch(err => {
            console.log(err)
        })
}

module.exports = { getAllCorona_detail,addCorona_detail}