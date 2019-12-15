import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./allRoter"

Vue.use(VueRouter);



const router = new VueRouter({
  routes
});

const routerPush = VueRouter.prototype.push;//重复添加改变路由
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

export default router;
