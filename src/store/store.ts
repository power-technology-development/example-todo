import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { user } from './user/index'
import { todo } from './todo/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    user,
    todo
  }
}

export default new Vuex.Store<RootState>(store)
