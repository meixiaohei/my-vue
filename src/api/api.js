import axios from 'axios';
import qs from 'qs';
const baseURL = '/api';

axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const instance = axios.create({});

let api = {
  baseURL:baseURL,
  instance:instance,
  post:function (url, params,callback, path, flag) {
    return new Promise((resolve, reject) => {
      let Url = (path ? path : baseURL) + url;
      let Params = flag ? params : qs.stringify(params, {arrayFormat: 'repeat'});
      api.axiosResponseCb('post',Url,Params,resolve, reject,callback);
    })
  },
  get:  function(url, params,callback, path) {
    return new Promise((resolve, reject) => {
      let Url = (path ? path : baseURL) + url;
      let Params = {params: params};
      api.axiosResponseCb('get',Url,Params,resolve, reject,callback);
    })
  },
  axiosResponseCb(options,url,params,resolve, reject,callback){
    axios[options](url, params).then(response => {
      if(callback)callback(response.data);
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    })
  },
};
export default api;
