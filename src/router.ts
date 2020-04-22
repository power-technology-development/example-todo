import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/todo/:userId',
      name: 'todo',
      component: () => import('./views/todo/Index.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user/Index.vue'),
      children: [
        {
          path: 'list',
          name: 'userList',
          component: () => import('./views/user/List.vue')
        },
        {
          path: 'add',
          name: 'adduser',
          component: () => import('./views/user/Add.vue')
        }
      ]
    }
  ]
})
