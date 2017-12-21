const Vue = require("vue");
const VueRouter = require("vue-router").default;
import Vuetify from 'vuetify';
import VuetifyCss from '../node_modules/vuetify/dist/vuetify.min.css';
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VuetifyCss);

const App = Vue.extend(require("./App.vue"));

const Fetch = require("./utilities/Fetch");

// Stores

// Components

Vue.component("greeting", require("./components/Greeting.vue"));

// Pages
import title from './pages/title.vue'
const Welcomes = {
	index: require("./pages/index.vue")
};

// Routing

const routes = [
	{
		path: "/",
		component: Welcomes["index"]
	},
  {
    path: "/title",
    component: title
  }
];

const router = new VueRouter({
	routes: routes
});

const app = new Vue({
	el: "#app",
	render: h => h(App),
	router
});
