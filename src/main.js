import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueAgile from 'vue-agile'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import novel from './components/novel.vue';
import manga from './components/manga.vue';
import history from './components/history.vue';
import promotion from './components/promotion.vue';
import cart from './components/cart.vue';
import payment from './components/payment.vue';
import rating from './components/rating.vue';
import home from './components/allBook.vue';


Vue.use(VueAgile)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes =[
  { path: '/novel', component: novel },
  { path: '/manga', component: manga },
  { path: '/history', component: history },
  { path: '/promotion', component: promotion },
  { path: '/cart', component: cart },
  { path: '/payment', component: payment },
  { path: '/rating', component: rating },
  { path: '/', component: home }
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})