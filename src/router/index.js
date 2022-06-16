import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import PostsDetailView from '../views/PostsDetailView.vue'
import Modal from '../views/ModalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
     
      component: PostsView
    },
    {
      path: '/postsDetail/:id',
      name: 'postsDetail',
     
      component: PostsDetailView
    },
    {
      path: '/modals',
      name:'modals',

      component: Modal
    },

  ]
})

export default router
