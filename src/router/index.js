import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Header from '@/components/Header'
import MainLayout from '../layouts/MainLayout.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainLayout,
      children: [
        { path: '', component: About }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
