const mongoose = require('mongoose')
// Check for missing values



const Personal_details = mongoose.Schema({
    name: {
        type: String,
        require: true,
        healthCheck: {
            type: 'string',
            minLength: 2,
            maxLength: 50
          }
    },
    identity: {
        type: String,
        required: true,
        unique: true,
        validator: function(v) {
            return /^[0-9]{9}$/.test(v);
          },
          message: props =>`${props.value} is not a valid please enter another!`
        
    },
    address
        : {
        city: {
            type: String,
            require: true,
            healthCheck: {
                type: 'string',
                minLength: 2,
                maxLength: 50
              }
        },
        street: {
            type: String,
            require: true,
            healthCheck: {
                type: 'string',
                minLength: 2,
                maxLength: 50
              }
        },
        num: {
            type: Number,
            require: true,
            healthCheck: {
                type: 'number',
                minimum: 1,
                maximum: 1000
              }
        }
    },
    date_of_birth: {
        type: Date,
        healthCheck: {
            type: 'date',
            minimum: '1900-01-01',
            maximum: '2022-12-31'
          }
       
    },
    phon:{
        type: String,
        require: true,
        validator: function(v) {
            return /^05\d([\d]{0,1})([-]{0,1})\d{7}$/.test(v);
          },
          message: props => `${props.value} is not a valid mobile phone number!`
        
        
    },
    mobile_phon: {
        type:  String,
        validator: function(v) {
            return /^0\d([\d]{0,1})([-]{0,1})\d{7}$/.test(v);
          },
          message: props => `${props.value} is not a valid phone number!`
        
      },
    image:{
        type:String
    }
    }, { strict: 'throw' });

module.exports = mongoose.model('Personal_details', Personal_details)

