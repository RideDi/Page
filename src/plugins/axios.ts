"use strict";

import axios from "axios";
import store from "../store";
import qs from "qs";
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if ((store.state as any).ins_toolkit_token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `${
        (store.state as any).ins_toolkit_token
      }`;
    }
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default {
  install: function (app: any, options: any) {
    // 添加全局的方法
    app.config.globalProperties.axios = _axios;
    // 添加全局的方法
    app.config.globalProperties.$translate = (key: any) => {
      return key;
    };
  },
};
