export class SignUpController {
    handle(hhtpRequest: any): any {
        return {
            statusCode: 400,
            body: new Error("Missing param: name")
        }
    }
}