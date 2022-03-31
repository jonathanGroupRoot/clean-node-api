export class InvalidParamError extends Error {
    constructor(param: string) {
        super(`Invalid Param Error ${param}`)
        this.name = "InvalidParamError"
    }
}
