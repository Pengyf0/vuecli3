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
      <div class="twoEchart">
        <div id="echart2"></div>
      </div>
      
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
    
      // 绘制图表
      myChart1.setOption(option1);
      window.onresize = myChart1.resize;
       //window.addEventListener("resize", () => { myChart1.resize();});//多个echerts监听变化
      let myChart2 = this.$echarts.init(document.getElementById("echart2"));
      let seriesList = [1,2,3,4].map((item,index) => {
              const obj = {}
              obj.name = '里斯'
              obj.value = 2
              return obj
          });
      function opt(max, min, vmp, unit, flag1, flag2) {
        let optn = {
           visualMap: {
            min: min,
            max: max,
            text: [vmp, "单位：" + unit],
            realtime: false,
            calculable: true,
            inRange: {
              color: ["lightskyblue", "yellow", "orangered"]
            }
          },
          tooltip: {
            formatter: function(params) {
              return params.name + ": " + params.value + unit;
            }
          },
           // 地图立体感
          geo: [
            {
              map: 'suzhou',
              roam: false,
              zoom: 1.0,
              zlevel: 2,
              z: 1,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#0993a2',
                  borderWidth: 2
                },
                emphasis: {
                  borderWidth: 2,
                  borderColor: '#0993a2'
                }
              }
            },
            {
              map: 'suzhou',
              roam: false,
              zoom: 1.0,
              zlevel: 0,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#639fdb',
                  borderWidth: 1.5
                },
                emphasis: {
                  borderWidth: 1.5,
                  borderColor: '#639fdb'
                }
              }
            },
            {
              map: 'suzhou',
              roam: false,
              zlevel: 1,
              zoom: 1.0,
              z: 1,

              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#035b64',
                  borderWidth: 2,
                  shadowColor: '#035b64',
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 10

                },
                emphasis: {
                  borderWidth: 3,
                  borderColor: '#035b64'
                }
              }
            },
            {
              map: 'suzhou',
              roam: false,
              zlevel: 1,
              zoom: 1.0,
              z: 1,

              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#077e8a',
                  borderWidth: 2,
                  shadowColor: 'rgb(11,73,101)',
                  shadowBlur: 0,
                  shadowOffsetX: -1,
                  shadowOffsetY: 10

                },
                emphasis: {
                  borderWidth: 3,
                  borderColor: '#077e8a'
                }
              }
            },
            {
              map: 'suzhou',
              roam: false,
              zoom: 1.0,
              zlevel: 1,
              z: 1,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#077e8a',
                  borderWidth: 2,
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 0,
                  shadowOffsetX: -1,
                  shadowOffsetY: 14

                },
                emphasis: {
                  borderWidth: 3,
                  borderColor: '#077e8a'
                }
              }
            }
          ],
          series:  [{
              name: "事项",
              type: "map",
              map: "suzhou",
              coordinateSystem: 'geo',
              zoom: 1.0,
              zlevel: 3,
              z: 3,
              itemStyle: {
                normal: {
                  label: {
                    show: true
                  }
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              data: seriesList
            }] || []
        };
        return optn;
      }
      let option2 = opt(1350, 160, "事项", "项", true, false);
      this.$echarts.registerMap("suzhou", suzhoushi);
      myChart2.setOption(option2, true);
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
    .twoEchart{
      display: flex;
       #echart2 {
        height: 400px;
        width: 400px;
      }
    }
  }
}
</style>