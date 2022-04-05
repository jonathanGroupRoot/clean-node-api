export class ServerError extends Error {
  constructor () {
    super('Internal server')
    this.name = 'ServerError'
  }
}
