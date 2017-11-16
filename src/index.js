import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import 'font-awesome-webpack'

Vue.use(VueRouter)
Vue.use(Vuetify)

// const App = Vue.extend(require("./App.vue"))

const Fetch = require("./utilities/Fetch")

// Stores

// Components

import Index from './pages/index.vue'

import Detail from './pages/detail.vue'
// Routing

const router = new VueRouter({
  routes: [

    {	  
		  path:'/detail',
		  component:Detail
    },
    {
      path: '/',
      component: Index
    }
  ]
})

const app = new Vue({
  router
}).$mount('#app')
