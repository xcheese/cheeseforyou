import axios from 'axios';

//添加请求拦截器
axios.interceptors.request.use(function(config){
    //在发送请求之前做某事
    return config;
},function(error){
    //请求错误时做些事
    return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function(response){
    //对响应数据做些事
    if(response.data){
        response = response.data
    }
    return response;
},function(error){
    //请求错误时做些事
    return Promise.reject(error)
});


export function cs_axios (api, data) {
    if(api.data && data){
        for(let k in api.data){
            if(data[k] != undefined){
                api.data[k] = data[k]
            }
        }
    }
    let config = {
        method: api.method || 'get',
        url: api.url,
    }
    if(api.method == 'post'){
        config.data = api.data;
    }else{
        config.params = api.data;
    }
    return axios(config);
}
export function cs_axios_all(axios_list){
    return axios.all(axios_list)
}