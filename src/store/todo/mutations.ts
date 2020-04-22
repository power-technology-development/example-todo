import { MutationTree } from 'vuex'
import { TodoState } from './types'

export const mutations: MutationTree<TodoState> = {
  MoveTask(state, { to, from, userId, taskId }) {
    const todoIndex = state.todos.findIndex((todo: any) => todo.userId === userId)
    const taskIndex = state.todos[todoIndex].tasks[from].findIndex((task: any) => task.id === taskId)
    if (todoIndex !== -1 && taskIndex !== -1) {
      state.todos[todoIndex].tasks[to].push(state.todos[todoIndex].tasks[from][taskIndex])
      state.todos[todoIndex].tasks[from].splice(taskIndex, 1)
    }
  },
  AddTask(state, { to, userId, task }) {
    const todoIndex = state.todos.findIndex((todo: any) => todo.userId === userId)
    if (todoIndex !== -1) {
      state.todos[todoIndex].tasks[to].push(task)
    }
  },
  AddSlot(state, { userId, slot }) {
    const todoIndex = state.todos.findIndex((todo: any) => todo.userId === userId)
    if (todoIndex !== -1) {
      state.todos[todoIndex].slots.push(slot)
      state.todos[todoIndex].tasks[slot.id] = []
    } else {
      state.todos.push({
        userId,
        slots: [slot],
        tasks: { [slot.id]: [] }
      })
    }
  }
}
