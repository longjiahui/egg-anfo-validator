module.exports = {
    get validator(){
        return this.app.validator
    },
    validate(...rest){
        return this.validator.v(...rest)
    }
}