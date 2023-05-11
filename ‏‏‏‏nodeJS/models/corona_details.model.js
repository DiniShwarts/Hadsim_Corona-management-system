const mongoose = require('mongoose')
const Corona_details = mongoose.Schema({

  id_link: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Personal_details',

  },
  corona_vaccination_date: [{
    type: Date,
    required: true,
    sparse: true

  }],
  vaccine_manufacturer: [{
    type: String,
     

  }],
  date_receiving_positive_result: {
    type: Date,
    required: true,
  },
  date_recovery_disease: {
    type: Date,
    required: true

  }
})

//מבטיח שהערך של idLink הוא ObjectId חוקי
// Corona_details.path('id_link').validate((value) => {
//   return mongoose.Types.ObjectId.isValid(value);
// }, 'Invalid id_link');
module.exports = mongoose.model('Corona_details', Corona_details);

