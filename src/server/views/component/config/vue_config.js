import axios from 'axios';
import {cs_axios, cs_axios_all} from './vue_axios'
export default {
    install(Vue,options)
    {

        Vue.const_config = {
            router:{
                mode:'history'
            }
        }

        Vue.prototype.axios = axios;
        Vue.prototype.cs_axios = cs_axios;
        Vue.prototype.cs_axios_all = cs_axios_all;
    }
}