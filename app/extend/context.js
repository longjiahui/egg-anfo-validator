const Validator = require('@anfo/validator')

const validator = new Validator()
module.exports = {
    get validator(){
        return validator
    },
    validate(...rest){
        return validator.v(...rest)
    }
}