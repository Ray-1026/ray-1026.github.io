import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import Projects from '../views/Projects.vue'
import Article from '../views/Article.vue'
import CV from '../views/CV.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/posts/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/CV',
    name: 'CV',
    component: CV,
    props: {
      pdfUrl: 'CV.pdf'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
