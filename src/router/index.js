import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Combat from '../views/Combat.vue'
import Accueil from '../views/Accueil.vue'
import Narration from '../views/Narration.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    component: Main,
    children: [
      {
        path: 'combat/:id/:part',
        component: Combat
      },
      {
        path: 'narration/:id/:part',
        component: Narration
      },
    ],
  },
  {
    path: '/',
    component: Accueil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
