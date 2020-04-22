import { GetterTree } from 'vuex'
import { TodoState } from './types'
import { RootState } from '../types'

const con = console

export const getters: GetterTree<TodoState, RootState> = {
  todoByUserId: (state: TodoState['todos']) => (userId: string) => {
    return state.todos.find((todo: any) => todo.userId === userId)
  }
}
