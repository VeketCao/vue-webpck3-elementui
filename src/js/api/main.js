/**
 * Created by Veket on 2017/9/29.
 */
import axios from 'axios';
import qs from 'qs';

const base_axios_options = {
    withCredentials: false,
    timeout: 5000,
    headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' }
};



const http = axios.create(Object.assign({}, { baseURL: 'http://localhost/v1/' }, base_axios_options));

axios.interceptors.response.use(
    response => { return response; },
    handelError
);
//处理异常情况
function handelError(res) {
    console.log(res.response.status);
    if (res.response.status === 500) {
        alert('服务器内部错误!');
    } else if (res.response.status === 404) {//用户未登录或者登录已超时
        alert('找不到请求的URL');
    }
}

export default {
    getUser: params => { return http.get(`coin/user`, { params: params }).then(res => res.data); },
    updateUser: params => { return http.post(`coin/user`,qs.stringify({ data: [params] })).then(res => res.data); },
    sendEmailYzm: params => { return http.get(`coin/user/yzm`,{params:params}).then(res => res.data);},
};