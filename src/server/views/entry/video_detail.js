import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import vue_config from '../component/config/vue_config'
Vue.use(vue_config);

import vmpageVideoDetail from '../component/page/vmpage-video-detail.vue'

const router = new VueRouter({
    mode: Vue.const_config.router.mode,
    routes: [
        { path: '/video',name: 'video_detail'},
    ]
})
const app = new Vue({
    router,
    components: {
        vmpageVideoDetail
    }
}).$mount('#app')