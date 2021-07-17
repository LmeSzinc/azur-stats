import Vue from 'vue'
import Router from 'vue-router'
import Overview from '../views/Overview'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Overview
    }
  ]
})
