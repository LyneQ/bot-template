module.exports = () => {
    const moment = require("moment")

    moment.locale('fr')
    return moment().format("*dddd D MMMM YYYY* [et il est] *HH[:]mm*")
}
