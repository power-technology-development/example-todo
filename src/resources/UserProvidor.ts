import HttpRequest from './HttpRequest'

class UserProvider extends HttpRequest {
  constructor() {
    super('user')
  }

  public async getAllUser(): Promise<any> {
    const { data } = await this.get('/all-user', {})
    return data
  }
}

export default UserProvider
