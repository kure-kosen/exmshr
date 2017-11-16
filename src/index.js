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

import Post from './pages/post.vue'

import Upload from './components/Upload.vue'

Vue.component('upload', Upload)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/post',
      component: Post
    }
  ]
})

const app = new Vue({
  router
}).$mount('#app')
