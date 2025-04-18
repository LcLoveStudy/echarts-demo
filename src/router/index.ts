import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: () => import('@/App.vue'),
      children: [
        {
          path: '/dashboard',
          meta: {
            title: '导航页'
          },
          component: () => import('@/views/dashboard/index.vue')
        }
      ]
    }
  ]
})

export default router
