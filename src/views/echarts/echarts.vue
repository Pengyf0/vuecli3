<template>
  <div class="echarts">
    <div class="topFixed">首页/ehcarts</div>
    <div class="top">
      <p>
        <b>一:终端下载包</b>
        <br/>npm install echarts -S
      </p>
      <p>
        <b>二:main.js// 引入echarts</b>
        <br/>import echarts from 'echarts'
        <br/>Vue.prototype.$echarts = echarts
      </p>
      <p>
        <b>三:页面</b>
        <br />let myChart = this.$echarts.init(document.getElementById('myChart'))
        <br />
        myChart.setOption({})
      </p>
    </div>
    <div class="content">
      <div id="echart1"></div>
      <div id="echart1"></div>
    </div>
  </div>
</template>

<script>
import "echarts/map/js/china.js";
// import "echarts/map/json/province/sichuan";
import suzhoushi from './suzhou'
export default {
  name: "echarts",
  data() {
    return {};
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      // 基于准备好的dom，初始化echarts实例
      let clientWidth = document.documentElement.scrollWidth; // 获取屏幕尺寸
      let scale = clientWidth / 1920;
      let myChart1 = this.$echarts.init(document.getElementById("echart1"));
      let option1= {
        title: { text: "网络小说" },
        tooltip: {},
        xAxis: {
          data: [
            "雪中悍刀行",
            "剑来",
            "太古神王",
            "无尽武装",
            "恐慌沸腾",
            "烦人修仙传",
            "仙逆",
            "武炼巅峰",
            "庆余年",
            "极具恐怖"
          ]
        },
        yAxis: {},
        series: [
          {
            name: "热度",
            type: "bar",
            barWidth: "20",
            itemStyle: {
                normal: {
                    color: new this.$echarts.graphic.LinearGradient(//找不到echarts,注意加this.
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    ),
                    barBorderRadius: [5,5,0,0],
                },
                emphasis: {
                    color: new this.$echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
             },
            data: [115, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 50]
          }
        ]
      }
      var mapChart2 = this.$echarts.init(document.getElementById("echart2"));
      var option2 = {
        // tooltip: {
        //   show: true,
        //   backgroundColor: "rgba(255,255,255,0.8)",
        //   extraCssText: "box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);",
        //   // borderWidth: 1,
        //   // borderColor: "#eee",
        //   position: ["2%", "64%"],
        //   borderRadius: 2,
        //   // padding: 0,
        //   textStyle: {
        //     color: "#6a717b"
        //   },
        //   grid: {
        //       top: "10%",
        //       bottom: "10%",
        //       left: '3%',
        //       right: '5%',
        //       containLabel: true,
        //     },

        //   formatter: function(params) {
        //     let color = ["#5FEA55", "#64A5F7", "#F7D36C", "#F56C67"];
        //     let quotaGrade = params.data.quotaGrade;
        //     let p = "";
        //     let quotaName = params.data.quotaName;
        //     for(var item in quotaName){ 
        //       let name = quotaName[item];
        //       let value = params.data.score[item];
        //       let quotaColor = quotaGrade[item][value];
        //       p += `<li><span style="display:inline-block;width:70%" >${name}</span><span style="display:inline-block;width:30%;color:${color[quotaColor]};text-align:center" >${value}</span></li>`
        //     }
        //     let htmlT = `<div style="background:#F7FAFF;margin:0px;padding:5px 10px;font-size:12px;width:200px;">
        //       <p style="color:#124DAB;font-weight:600;text-align:center">
        //       ${params.name}效能情况</p>
        //         <ul>
        //         <li style="color:#124DAB;"><span style="display:inline-block;width:70%" >单项能力</span><span style="display:inline-block;width:30%" >效能等级</span></li>
        //         ${p}
        //         </ul>
        //       </div>`;

        //     return htmlT;
        //   }
        // },
        visualMap: {
          type: "piecewise",
          left: "84%",
          bottom: "6%",
          itemGap: 25,
          pieces: this.areaColorGrade,
          color: "#fff",
          textStyle: {
            color: "#000"
          },
          visibility: "off"
        },
        geo: {
          roam: false,
          map: "苏州",
          zoom: 1.1,
          label: {
            normal: {
              show: true,
              color: "#fff"
            }
          },
          itemStyle: {
            opacity: 1,
            areaColor: "",
            emphasis: {
              borderWidth: 2
            }
          },
          regions: HighLightColor(Sichuandata)
        },
        series: [
          {
            name: "效能提升",
            type: "map",
            //map: "gansu",
            map:"suzhou",
            roam: false,
            geoIndex: 0,
            silent: false,
            label: {
              normal: {
                color: "#fff"
              }
            },

            data: []
          }
        ]
      };
      mapChart2.setOption(option2);
      this.$echarts.registerMap("苏州", suzhoushi);
      mapChart.resize();
      // 绘制图表
      myChart1.setOption(option1);
      window.onresize = myChart1.resize;
       //window.addEventListener("resize", () => { myChart1.resize();});//多个echerts监听变化
    }
  }
};
</script>
<style lang="scss" scoped>
.echarts {
  padding: 20px;
  font-size: 14px;
  .topFixed {
    height: 50px;
    margin-top: -20px;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
  }
  .top {
    background: #fff;
    padding:20px;
  }
  .content {
    background: #fff;
    margin-top: 20px;
    #echart1 {
      height: 400px;
      //    width: 300px;
    }
    #echart2 {
      height: 400px;
      //    width: 300px;
    }
  }
}
</style>