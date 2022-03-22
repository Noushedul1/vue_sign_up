import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/product',
    name: 'product',
    component: ()=>{return import('../views/ProductView.vue')}
  },
  {
    path: '/signup',
    name: 'signup',
    component: ()=>{return import('../views/SignUp.vue')}
  },
  {
    path: '/imagegallary',
    name: 'imagegallary',
    component: ()=>{return import('../views/ImageGallary.vue')}
  },
  {
    path: '/dynamicclass',
    name: 'dynamicclass',
    component: ()=>{return import('../views/DynamicClass.vue')}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
