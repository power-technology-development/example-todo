import { TodoState } from './types'

export const state: TodoState = {
  todos: [
    {
      userId: '1',
      slots: [
        { id: '1', name: 'To Do' },
        { id: '2', name: 'In Process' },
        { id: '3', name: 'Done' }
      ],
      tasks: {
        1: [
          {
            id: '1',
            title: 'code หน้า register',
            description: 'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!',
            timeStamp: Date.now()
          }
        ],
        2: [
          {
            id: '2',
            title: 'code หน้า login',
            description: 'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!',
            timeStamp: Date.now()
          }
        ],
        3: [
          {
            id: '3',
            title: 'code หน้า edit user',
            description: 'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!',
            timeStamp: Date.now()
          }
        ]
      }
    }
  ]
}
