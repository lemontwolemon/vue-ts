import quRequest from '../index'
import { IAccount, IDataType, ILoginResult } from '@/service/login/types'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  return quRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return quRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return quRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
