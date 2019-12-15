<template>
  <div class="circleImg">
    <div class="topFixed">
      <span>首页/轮播图</span>
    </div>
    <div class="text">
      <p>
        <b>一:终端下载包</b>
        <br />npm i vue-awesome-swiper -S
      </p>
      <p>
        <b>二:main.js// 引入轮播插件</b>
        <br />
        import vueSwiper from 'vue-awesome-swiper'
        <br />
        import 'swiper/dist/css/swiper.css'
        <br />Vue.use(vueSwiper);
      </p>
      <p>
        <b>三:页面</b>
        <br />
        import { swiper, swiperSlide } from "vue-awesome-swiper";
        <br />require("swiper/dist/css/swiper.css");
        <br />
        let img1 = require('../../assets/img1.jpg'),myChart.setOption({})
      </p>
    </div>
    <div class="imgTitle">
      <div class="img">
        <img src="../../assets/img1.jpg" alt height="100%" width="100%" />
      </div>
      <div class="img">
        <img src="../../assets/img2.jpg" alt height="100%" width="100%" />
      </div>
      <div class="img">
        <img src="../../assets/img3.jpg" alt height="100%" width="100%" />
      </div>
      <div class="img">
        <img src="../../assets/img4.jpg" alt height="100%" width="100%" />
      </div>
      <div class="img">
        <img src="../../assets/img5.jpg" alt height="100%" width="100%" />
      </div>
      <div class="img">
        <img src="../../assets/img6.jpg" alt height="100%" width="100%" />
      </div>
    </div>
    <div class="outContainer">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of imgList" :key="index">
          <img class="swiper-img" :src="item.url" alt height="100%" width="100%" />
          <div class="botTitle">{{ item.name }}</div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
let img1 = require("../../assets/img1.jpg"),
  img2 = require("../../assets/img2.jpg"),
  img3 = require("../../assets/img3.jpg");
let img7 = require("../../assets/img7.jpg");
export default {
  name: "circleImg",
  components: { swiper, swiperSlide },
  data() {
    let that = this;
    return {
      imgIndex: 1,
      imgList: [
        { url: img1, name: "贝吉塔1" },
        { url: img2, name: "孙悟饭2" },
        { url: img3, name: "贝吉塔3" },
        { url: img7, name: "养眼7" }
      ],
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
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
  }
};
</script>
<style lang="scss" scoped>
.circleImg {
  padding: 20px;
  .imgTitle {
    height: 300px;
    margin-top: 20px;
    background: #fff;
    .img {
      float: left;
      width: 180px;
      height: 100%;
    }
  }
  .text {
    background: #fff;
    padding:20px;
  }
  .outContainer {
    margin-top: 20px;
    background: #fff;
  }
  & >>> .swiper-container {
    height: 300px;
    width: 400px;
    border: 1px solid red;
  }
  tr:nth-child(1) {
    td:nth-child(1) {
      color: red;
    }
    td:nth-child(2) {
      color: yellow;
    }
    td:nth-child(3) {
      color: yellow;
    }
  }
  tr:nth-child(2) {
    td:nth-child(1) {
      color: red;
    }
    td:nth-child(2) {
      color: yellow;
    }
    td:nth-child(3) {
      color: yellow;
    }
  }
  tr td[color="red"] {
    font-weight: 800;
  }
}
</style>
<style lang="scss">
.circleImg {
  .swiper-container {
    height: 480px;
    width: 300px;
    border: 1px solid red;
    margin: 0;
  }
  .swiper-pagination {
    bottom: 40px;
  }
  .botTitle {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    background: rgba($color: #000000, $alpha: 0.3);
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
  }
}
</style>
