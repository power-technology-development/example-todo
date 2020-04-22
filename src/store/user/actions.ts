import { ActionTree } from 'vuex'
import { UserState } from './types'
import { RootState } from '../types'
import UserService from '@/resources/UserProvidor'
const userService = new UserService()
export const actions: ActionTree<UserState, RootState> = {
  addUsers(context, user) {
    context.commit('AddUser', user)
  }
}
