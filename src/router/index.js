import Vue from 'vue'
import Router from 'vue-router'
import Overview from '../views/Overview'
import Api from '../views/Api'
import Research4Projects from '../views/Research4Projects'
import Research4Blueprints from '../views/Research4Blueprints'
import Research4Equipments from '../views/Research4Equipments'
import Research4Others from '../views/Research4Others'
import Research5Projects from '../views/Research5Projects'
import Research5Blueprints from '../views/Research5Blueprints'
import Research5Equipments from '../views/Research5Equipments'
import Research5Others from '../views/Research5Others'
import ShopItems from '../views/ShopItems'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Overview
    },
    {
      path: '/api',
      component: Api
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
      path: '/research5-projects',
      component: Research5Projects
    },
    {
      path: '/research5-blueprints',
      component: Research5Blueprints
    },
    {
      path: '/research5-equipments',
      component: Research5Equipments
    },
    {
      path: '/research5-others',
      component: Research5Others
    },
    {
      path: '/shop-items',
      component: ShopItems
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
