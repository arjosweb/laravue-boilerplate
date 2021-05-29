// Bootstrap Core - Laravel
require('./bootstrap');

// Import VueJS
import Vue from "vue"
window.Vue = require('vue').default;

// Default Component VueJS
import App from "./App.vue";

// VueRouter
import VueRouter from "vue-router";
Vue.use(VueRouter);
// VueRouter - Import router
import { routes } from "./router";

// Vuex
import Vuex from "vuex";
Vue.use(Vuex);
// Vuex - Import store
import store from "./store"

// PopperJS
import "popper.js";

// jQuery
import "jquery";

// BootstrapVue
import "bootstrap-vue"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

// PortalVue
import PortalVue from "portal-vue";
Vue.use(PortalVue);

// SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

// BoxIcons
import "boxicons";
import "boxicons/css/boxicons.min.css";

// FontAwesome
import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";

// Components Global Declaration
Vue.component('Theme', require('./components/theme/Theme.vue').default);

// Production Mode
Vue.config.productionTip = false
Vue.config.devtools = true

// Enable History Mode
const router = new VueRouter({
    mode: 'history',
    routes
});

// Start Vue Instance
const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify: new Vuetify(),
    render: h => h(App),
});
