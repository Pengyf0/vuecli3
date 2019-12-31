import axios from 'axios';
import ViewUI from 'view-design'

let axiosDeal = axios.create({
  // baseURL:'/api',//可以将代理的地址放到这里来
});
// 添加请求拦截器
axiosDeal.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.headers.code = '2333333'
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosDeal.interceptors.response.use(res => {
  // 对响应数据做点什么console.log('哟哟，我要开始接收请求',res);
  return res.data;
},  (error) => {
  // 对响应错误做点什么提示console.log('哟哟，我要开始接收请求错误22',error.response);
  ViewUI.Message.error({
    background:true,
    content:error.response.status
  })
  return Promise.reject(error);
});



export default axiosDeal