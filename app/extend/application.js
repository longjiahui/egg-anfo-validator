const Validator = require('@anfo/validator')

module.exports = {
    get validator(){
        let validateSchema = this.config.validateSchema
        let key = '__validator'
        if(!this[key]){
            if(validateSchema instanceof Function){
                validateSchema = validateSchema(this)
            }
            this[key] = new Validator(validateSchema)
        }
        return this[key]
    },
}