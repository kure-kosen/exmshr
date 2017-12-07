import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import axios from 'axios'
import './stylus/main.styl'
import 'font-awesome-webpack'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(axios)
// const App = Vue.extend(require("./App.vue"))

const Fetch = require("./utilities/Fetch")

// Stores

// Components

import Index from './pages/index.vue'
import Search from './pages/search.vue'
// Routing

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {  
      path: '/search',
      component: Search

    }
  ]
})

const app = new Vue({
  router
}).$mount('#app')
