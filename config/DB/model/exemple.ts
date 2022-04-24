const mongo = require('mongoose')

const schema = new mongo.Schema({

    title:{
        type:String,
        default:null
    },
    paragraph:{
        type:String,
        default: "exemple de paragraph"
    }

})

module.exports = mongo.model( 'BlackList', schema )
