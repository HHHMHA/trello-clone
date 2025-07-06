import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { CustomRouteMeta } from '@/core/types/router'
import CoreHeader from '@/core/layouts/CoreHeader.vue'

const HomeView = () => import('@/core/views/HomeView.vue')

const routes: Array<RouteRecordRaw & { meta?: CustomRouteMeta }> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      header: CoreHeader
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
