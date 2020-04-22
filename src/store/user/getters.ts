import { GetterTree } from 'vuex'
import { UserState } from './types'
import { RootState } from '../types'

const con = console

export const getters: GetterTree<UserState, RootState> = {
  users(state): UserState['users'] {
    return state.users
  }
}
