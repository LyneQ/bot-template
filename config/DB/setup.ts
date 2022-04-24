module.exports = () => {
    const mongoose = require("mongoose");
    const colors = require('colors');

    const mongoLink = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_IP}/${process.env.DB_NAME}?authSource=admin&directConnection=true&ssl=false`


    mongoose.connect(mongoLink)
        .then( (db: any) =>{
            console.log( colors.green(`[APP] connected to database ${colors.yellow(db.connections[0].name)}`) )
        })
        .catch( (err: any) =>{
            console.log( colors.red(`[APP] an internal error has occurred: "${err.message}"`) )
        } )

}