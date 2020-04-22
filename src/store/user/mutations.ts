import { MutationTree } from 'vuex'
import { UserState } from './types'

export const mutations: MutationTree<UserState> = {
  AddUser(state, user: any) {
    state.users.push(user)
  }
}
