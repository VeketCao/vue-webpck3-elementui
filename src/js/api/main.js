/**
 * Created by Veket on 2017/9/29.
 */
import axios from 'axios';

const base_axios_options = {
    withCredentials: false,
    timeout: 5000,
    headers: { 'content-type': 'application/json' }
};

const http = axios.create(Object.assign({}, { baseURL: 'http://localhost/v1/' }, base_axios_options));


export default {
    getUser: params => { return http.get(`coin/user`, { params: params }).then(res => res.data); },
    updateUser: params => { return http.post(`coin/user`, { params: params }).then(res => res.data); },
    sendEmailYzm: params => { return http.get(`coin/user/yzm`,{params:params}).then(res => res.data);},
};