import Vue from 'vue'
import Router from 'vue-router'
import Overview from '../views/Overview'
import Research4Projects from '../views/Research4Projects'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Overview
    },
    {
      path: '/research4-projects',
      component: Research4Projects
    }
  ]
})
