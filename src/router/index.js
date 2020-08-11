import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../components/dashboard.vue'
import experience from '../components/experience.vue'
import personalProfile from '../components/personalProfile.vue'
import contact from '../components/contact.vue'
import skills from '../components/skills.vue'
import resume from '../components/resume.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // component: personalProfile
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: dashboard
  },
  {
    path: '/experience',
    name: 'experience',
    component: experience
  },
  {
    path: '/skills',
    name: 'skills',
    component: skills
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/profile',
    name: 'personalProfile',
    component: personalProfile
  },
  {
    path: '/resume',
    name: 'resume',
    component: resume
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
