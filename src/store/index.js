import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:'pyf',
    id:'0000',
    nickname:'城北徐公',
    countDay:10
  },
  mutations: {//提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
    addCountDay(state){
       state.countDay += 1
    },
    reduceCountDay(state){
       state.countDay -= 1
    }
  },
  actions: {},//异步逻辑都应该封装到 action 里面。
  getters:{},
  modules: {}
});
