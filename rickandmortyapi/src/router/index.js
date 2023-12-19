import { createWebHistory, createRouter } from 'vue-router'
import HelloWorldVue from '@/components/HelloWorld.vue'

const routes = [{ path: '/', name: 'Home', component: HelloWorldVue }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
