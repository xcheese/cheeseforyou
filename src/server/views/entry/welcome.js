import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import vue_config from '../component/config/vue_config'
Vue.use(vue_config);

import vmpageWelcome from '../component/page/vmpage-welcome.vue'

const router = new VueRouter({
    mode: Vue.const_config.router.mode,
    routes: [
        { path: '/',name: 'index'},
        { path: '/signup',name: 'signup'},
        { path: '/login',name: 'login'},
    ]
})
const app = new Vue({
    router,
    components: {
        vmpageWelcome
    }
}).$mount('#app')