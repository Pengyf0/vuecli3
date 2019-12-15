import Vue from "vue";
import App from "./App.vue";
import router from "./router";//路由
import store from "./store";//vuex公共数据方法
//import axios from "axios"
import http from "./api/getData"
import echarts from "echarts";//echrars图
import ElementUI from 'element-ui';//饿了么UI
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';//iview4.0.0以上
import 'view-design/dist/styles/iview.css';
import vueSwiper from "vue-awesome-swiper";//轮播图
import "swiper/dist/css/swiper.css"

Vue.use(vueSwiper);
Vue.use(ElementUI);
Vue.use(ViewUI);

Vue.prototype.$echarts = echarts ;
//Vue.prototype.axios = axios ;
Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
