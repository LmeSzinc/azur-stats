// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './locales'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(router);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  i18n,
  components: {App},
  template: '<App/>',
  router,
  render: h => h(App),
});
