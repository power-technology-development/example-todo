import { ActionTree } from 'vuex'
import { TodoState } from './types'
import { RootState } from '../types'
import UserService from '@/resources/UserProvidor'
import uniqid from 'uniqid'

const userService = new UserService()
export const actions: ActionTree<TodoState, RootState> = {
  moveTask(context, { to, from, userId, taskId }): void {
    context.commit('MoveTask', { to, from, userId, taskId })
  },
  addTask(context, { to, userId, task }): void {
    task = {
      ...task,
      id: uniqid(),
      timeStamp: Date.now()
    }
    context.commit('AddTask', { to, userId, task })
  },
  addSlot(context, { userId, slotName }): void {
    const slot = {
      id: uniqid(),
      name: slotName
    }
    context.commit('AddSlot', { userId, slot })
  }
}
