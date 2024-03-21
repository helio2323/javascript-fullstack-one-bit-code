const { createRouter } = require("vue-router");
import Home from './views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    }
  ]
})

export default router