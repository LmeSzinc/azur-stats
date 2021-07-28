import Vue from 'vue'
import Router from 'vue-router'
import Overview from '../views/Overview'
import Research4Projects from '../views/Research4Projects'
import Research4Blueprints from '../views/Research4Blueprints'
import Research4Equipments from '../views/Research4Equipments'
import Research4Others from '../views/Research4Others'

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
    },
    {
      path: '/research4-blueprints',
      component: Research4Blueprints
    },
    {
      path: '/research4-equipments',
      component: Research4Equipments
    },
    {
      path: '/research4-others',
      component: Research4Others
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
