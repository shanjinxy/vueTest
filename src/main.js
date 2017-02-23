// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import ratings from 'components/ratings/ratings';
import goods from 'components/goods/goods'
import seller from 'components/seller/seller';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/ratings',
    component: ratings
  }, {
    path: '/goods',
    component: goods
  }, {
    path: '/seller',
    component: seller
  }],
  linkActiveClass:'active'
})
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {App},
  data: {
    eventHub: new Vue()
  }
}).$mount('#app');
router.push('goods')
