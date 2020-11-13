import axios from 'axios'
import router from '@/router/index'
import qs from 'qs'

// 创建axios实例
const service = axios.create({
    // baseURL: process.env.BASE_API, // api 的 base_url
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 2000,// 请求超时时间
    // paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
})

// request拦截器
service.interceptors.request.use(
    config => {
        //   if (getToken()) {
        //     config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        //   }
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        return Promise.resolve(response.data)
    },
    error => {
        return Promise.reject(error.response)
    }
)

export default service