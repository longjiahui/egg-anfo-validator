const Validator = require('@anfo/validator')

module.exports = {
    get validator(){
        let validateSchema = this.config.validateSchema
        let key = '__validator'
        if(!this[key]){
            this[key] = new Validator(validateSchema)
        }
        return this[key]
    }
}