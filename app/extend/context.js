const { ValidateError } = require("../lib/errorType")

module.exports = {
    get validator(){
        return this.app.validator
    },
    validate(...rest){
        return this.validator.v(...rest)
    },
    async v(...rest){
        let params = this.request.method?.toLowerCase() === 'get' ? this.request.query : this.request.body
        return this.validate(params, ...rest).then(res=>{
            if(!res){
                throw new ValidateError(this.request.body, rest)
            }
        })
    }
}