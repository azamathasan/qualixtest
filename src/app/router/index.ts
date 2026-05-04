import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/requests',
    component: () => import('@/pages/requests-list'),
  },
  {
    path: '/requests/new',
    component: () => import('@/pages/request-create'),
  },
  {
    path: '/requests/:id',
    name: 'request-details',
    component: () => import('@/pages/request-details'),
    props: true, 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;