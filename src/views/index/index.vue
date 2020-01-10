<template>
  <div class="indexMain">
    <header>
      <div class="head">
        <span class="headTitle">心湛静，笑白云多事，等闲为雨出山来</span>
      </div>
    </header>
    <div class="headerImg">
    </div>
    <div class="recommend">
     <div class="item">1</div>
     <div class="item">2</div>
     <div class="item">3</div>
     <div class="item">4</div>
     <div class="item">5</div>
     <div class="item">6</div>
    </div>
    <div class="content">
       <div class="lunImg">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) of imgList" :key="index">
            <img class="swiper-img" :src="item.url" alt height="100%" width="100%" />
            <div class="botTitle"><span>{{ item.name }}</span> </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
       </div>
       <div class="joke">
        <Button type="primary" @click="getJoke">每日一笑</Button>
        <ul>
          <li v-for="(item,index) in jokeList" :key="index">{{item.text}}</li>
        </ul>
       </div>
       <h3>
          首页
          <br />
          {{ countDay }} 
          <button @click="addDay">增加</button>
          <button @click="reduceDay">减少</button>
          <button @click="toclcle">跳转至轮播图</button>
        </h3>
    </div>
    
    <div class="title"></div>
    
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import api from "@/api/getData.js"
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
let img1 = require("../../assets/img1.jpg"),
  img2 = require("../../assets/img2.jpg"),
  img3 = require("../../assets/img3.jpg"),
  img7 = require("../../assets/img7.jpg");
export default {
  name: "indexMain",
  components: { swiper, swiperSlide },
  inject:['toPage'],
  data() {
    let that = this;
    return {
      jokeList:[],//笑话列表
      imgIndex: 1,
      imgList: [
        { url: img1, name: "11月的故事新翻" },
        { url: img2, name: "孙悟饭2" },
        { url: img3, name: "贝吉塔3" },
        { url: img7, name: "养眼7" }
      ],
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        //loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: true,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //autoPlay:true,
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex = this.realIndex - 1;
          }
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
    };
  },
  watch: {
  },
  computed: {
    ...mapState(["countDay"])//获取getter里面的计算属性。
  },
  methods: {
    ...mapMutations(["addCountDay", "reduceCountDay"]),//获取mutations里面的方法
    addDay() {
      this.addCountDay();//this.$store.commit('addCountDay')
    },
    reduceDay() {
      this.reduceCountDay();//this.$store.commit('reduceCountDay')//调用的两种方法
      let a = 2;
      a == 1 ? "2": ""
      if (a == 1) {
        console.log(233);
      }
    },
    toclcle(){
      this.toPage({path: "/circleImg",name: "circleImg",title: "轮播图",tabActived: false},2)
      // this.$router.push({
      //   path:'/circleImg'
      // })
    },
    getJoke(){
      api.getJokeList({page:1,count:6,type:'video'}).then(res => {
        this.jokeList=res.result;
      })
      // console.time()
      // this.$http.get("https://api.apiopen.top/getJoke?",{
      //   page:1,count:5,type:'video'
      // }).then(res=>{
      //   this.jokeList=res.result;
      //    console.timeEnd();
      // })
      // this.axios.get("https://api.apiopen.top/getJoke?page=1&count=5&type=video").then(res=>{
      //   console.log(res);
      //   this.jokeList=res.data.result
      // })
    }
  },
  mounted(){
    
  }
};
</script>
<style lang="scss" scoped>
.indexMain {
  header{
    height: 46px;
    background: #fff;
    .head{
       line-height: 46px;
       font-size: 18px;
       .headTitle{
         margin-left: 20px;
         color: #409eff;
         //font-style:oblique;
         text-shadow:2px 2px 3px #444;
         background: linear-gradient(to right, red, blue);
         background-clip: text;
         color: transparent;
       }
    }
  }
  .headerImg{
    width: 100%;
    height: 160px;
    background: #fff;
    background:url('../../assets/imgTop.jpg') center no-repeat;
    background-size: 100% 100%;
  }
  .recommend{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    margin:0 auto;
    width: 1100px;
    padding:20px 0 0;
    .item{
        width: 300px;
        height: 200px;
        border: 1px solid red;
        margin-bottom: 20px;
    }
  }
  .content{
    display: flex;
    margin-top: 20px;
    flex-direction:row;
    flex-wrap:nowrap;//|wrap|wrap-reverse;
    justify-content:center;
    .lunImg{
      width: 200px;
      margin-right: 20px;
    }
    .joke{
      width: 400px;
      margin-right: 20px;
      ul {
        border: 1px solid grey;
        li {
          height: 50px;
          overflow: hidden;
        }
        & > li + li {
          border-top: 1px solid #dcdee2;
        }
      }
    }
  }
  h3 {
    height: 200px;
  }
 
}
</style>
<style lang="scss">
.indexMain {
  .swiper-container {
    height: 350px;
    width: 200px;
  }
  .swiper-pagination {
    bottom: 10px;
    text-align: right;
    //padding-right: 20px;
  }
  .botTitle {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    background: rgba($color: #000000, $alpha: 0.3);
    color: #fff;
    text-align: left;
    line-height: 40px;
    font-size: 18px;
    span{
      margin-left: 20px;
    }
  }
  .swiper-pagination-bullet {
    
    background: #fff;
    opacity: 1;
}
  .swiper-pagination-bullet-active{
    background:rgba($color: #007aff, $alpha: 1.0);
    width: 15px;
    border-radius: 2px;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    width: 100%;
  }
}
</style>
