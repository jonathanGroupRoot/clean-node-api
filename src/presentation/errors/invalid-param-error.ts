export class InvalidParamError extends Error {
    constructor(paramEmail: string) {
        super(`Invalid Email ${paramEmail}`)
        this.name = "InvalidParamError"
    }
}
