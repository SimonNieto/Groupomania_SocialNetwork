import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import "sweetalert2"
import "axios"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



// import '@babel/polyfill'
// import 'mutationobserver-shim'
// import './plugins/bootstrap-vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// });

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

