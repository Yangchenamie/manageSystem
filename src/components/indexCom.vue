<template>
  <div class="conItem">
      <div class="itemDataAll">
        <div class="itemBox oneBg">
          <img src="../../static/img/one-top.png" alt="" class="onetopImg" />
          <img src="../../static/img/one.png" alt="" class="oneAbImg" />
          <img
            src="../../static/img/one-buttom.png"
            alt=""
            class="onebuttomAbImg"
          />
          <div class="itemText">
            <p class="itemTitle">今日订单收入</p>
            <p class="itemNum">￥6666.88</p>
            <p>+1.2% 同昨天对比</p>
          </div>
        </div>
        <div class="itemBox twoBg">
          <img src="../../static/img/two-top.png" alt="" class="onetopImg" />
          <img src="../../static/img/two.png" alt="" class="oneAbImg" />
          <img
            src="../../static/img/two-bottom.png"
            alt=""
            class="onebuttomAbImg"
          />
          <div class="itemText">
            <p class="itemTitle">今日订单数量</p>
            <p class="itemNum">259</p>
            <p>+1.2% 同昨天对比</p>
          </div>
        </div>
        <div class="itemBox threeBg">
          <img src="../../static/img/three-top.png" alt="" class="onetopImg"/>
          <img src="../../static/img/three.png" alt="" class="oneAbImg" />
          <img
            src="../../static/img/three-bottom.png"
            alt=""
            class="onebuttomAbImg"
          />
          <div class="itemText">
            <p class="itemTitle">今日访客数</p>
            <p class="itemNum">259</p>
            <p>+1.2% 同昨天对比</p>
          </div>
        </div>
        <div class="itemBox fourBg">
          <img src="../../static/img/four-top.png" alt="" class="onetopImg"/>
          <img src="../../static/img/four.png" alt="" class="oneAbImg" />
          <img
            src="../../static/img/four-bottom.png"
            alt=""
            class="onebuttomAbImg"
          />
          <div class="itemText">
            <p class="itemTitle">广告播放数</p>
            <p class="itemNum">10.00%</p>
            <p>+1.2% 同昨天对比</p>
          </div>
        </div>
      </div>
      <div class="itemTime">
        <p>实时概况</p>
        <div class="data">
          <span>日期</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="timeFlexBox">
          <div class="time-item">
            <div class="itemTimeBox">
              <img src="../../static/img/vedio.png" alt="" />
              <div class="itemTimeText">
                <span class="timeTitle">视频播放数</span>
                <span class="timeNum">132</span>
              </div>
            </div>
            <span>同昨天对比 <span class="numData">+1.2%</span></span>
            <span>昨日 <span class="numData">78</span></span>
          </div>
          <div class="time-item">
            <div class="itemTimeBox">
              <img src="../../static/img/teacher.png" alt="" />
              <div class="itemTimeText">
                <span class="timeTitle">司机数</span>
                <span class="timeNum">12</span>
              </div>
            </div>
            <span>同昨天对比 <span class="numData">+1.2%</span></span>
            <span>昨日 <span class="numData">100+</span></span>
          </div>
          <div class="time-item">
            <div class="itemTimeBox">
              <img src="../../static/img/zixun.png" alt="" />
              <div class="itemTimeText">
                <span class="timeTitle">客户数</span>
                <span class="timeNum">284</span>
              </div>
            </div>
            <span>同昨天对比 <span class="numData">+1.2%</span></span>
            <span>昨日 <span class="numData">78</span></span>
          </div>
          <div class="time-item">
            <div class="itemTimeBox">
              <img src="../../static/img/zhandian.png" alt="" />
              <div class="itemTimeText">
                <span class="timeTitle">站点数</span>
                <span class="timeNum">84</span>
              </div>
            </div>
            <span>同昨天对比 <span class="numData">+1.2%</span></span>
            <span>昨日 <span class="numData">78</span></span>
          </div>
        </div>
      </div>
      <div class="itemStats">
        <div class="itemStatsFl">
          <div id="main" style="width: 600px; height: 349px"></div>
          <div class="itemStatsFlTab">
            <ul>
              <li class="active">日</li>
              <li>周</li>
              <li>月</li>
            </ul>
          </div>
        </div>
        <div class="itemStatsFr">
          <div id="mainFr" style="width: 100%; height: 349px"></div>
          <div class="twoData">
            <span>日期</span>
            <el-date-picker v-model="value2" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      value1:"",
      value2:""
    }
  },
  methods:{
      myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var xDataArr = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
      var yDataArr1 = [120, 132, 101, 134, 90, 230, 210];
      var yDataArr2 = [20, 82, 191, 94, 290, 330, 310];

      var option = {
        grid: {
          top: "25%",
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true, //x轴显示
        },
        legend: {
          data: ["访客量", "成交量"],
          type: "plain",
          left: 50,
          top: 18,
        },
        xAxis: {
          type: "category",
          data: xDataArr,
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            name: "访客量",
            type: "line",
            data: yDataArr1,
            stack: "all", // series中的每一个对象配置相同的stack值, 这个all可以任 意写
            smooth: true,
            symbol: "none",
          },
          {
            name: "成交量",
            type: "line",
            data: yDataArr2,
            stack: "all", // series中的每一个对象配置相同的stack值, 这个all可以任意 写
            smooth: true,
            symbol: "none",
          },
        ],
        // label:{
        //     show:true
        // }
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    echartsTwo() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("mainFr"));

      // 指定图表的配置项和数据
      var xDataArr = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
      var yDataArr1 = [120, 132, 101, 134, 90, 230, 210];

      var option = {
        grid: {
          top: "35%",
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true, //x轴显示
        },
        xAxis: {
          type: "category",
          data: xDataArr,
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            name: "访客量",
            type: "bar",
            data: yDataArr1,
            stack: "all", // series中的每一个对象配置相同的stack值, 这个all可以任 意写
            // smooth: true,
            symbol: "none",
            itemStyle: {
              borderRadius: [5, 5, 0, 0],
            },
            barWidth: 8,
            color: "rgba(43, 193, 123, 1)",
          },
        ],
        // label:{
        //     show:true
        // }
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

  },
  mounted(){
    this.myEcharts()
    this.echartsTwo()
  }
}
</script>

<style scoped lang="less">
.conItem {
    float: left;
    width: 100%;
    padding: 37px 40px 0;
    box-sizing: border-box;
    margin-bottom: 30px;
    .itemDataAll {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .itemBox {
        position: relative;
        min-width: 210px;
        max-width: 300px;
        height: 150px;
        color: #fff;
        font-size: 12px;
        margin-bottom: 10px;
        flex: 1;
        margin: 0 25px 10px;
        .onetopImg{
          width: 40%;
        }
        .oneAbImg {
          position: absolute;
          z-index: 99;
          // left: 25px;
          left: 10%;
          // top: 50px;
          top: 28%;
          // width: 50px;
          width: 20%;
        }
        .onebuttomAbImg {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 50%;
        }
        .itemText {
          position: absolute;
          text-align: right;
          right: 15px;
          top: 20px;
          & p {
            margin: 12px 0;
          }
          .itemTitle {
            font-size: 14px;
          }
          .itemNum {
            font-size: 16px;
          }
        }
      }
      .oneBg {
        background: linear-gradient(
          130.24deg,
          rgba(112, 232, 201, 1) 0%,
          rgba(57, 206, 199, 1) 100%
        );
      }
      .twoBg {
        background: linear-gradient(
          130.24deg,
          rgba(208, 103, 203, 1) 0%,
          rgba(217, 102, 211, 1) 100%
        );
      }
      .threeBg {
        background: linear-gradient(
          130.24deg,
          rgba(255, 174, 96, 1) 0%,
          rgba(251, 146, 79, 1) 100%
        );
      }
      .fourBg {
        background: linear-gradient(
          130.24deg,
          rgba(254, 136, 108, 1) 0%,
          rgba(253, 83, 88, 1) 100%
        );
      }
    }
    .itemTime {
      position: relative;
      margin-top: 50px;
      width: 100%;
      background-color: #fff;
      padding: 42px 37px 0;
      box-sizing: border-box;
      // height: 257px;
      & p {
        margin: 0;
        font-size: 18px;
      }

      .data {
        position: absolute;
        font-size: 12px;
        top: 15px;
        right: 58px;
        & span {
          margin-right: 8px;
        }
      }
      .timeFlexBox {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        flex-wrap: wrap;
        .time-item {
          flex:1;
          min-width: 144px;
          margin:  0 20px 20px;
          & span {
            font-size: 12px;
            color: rgba(153, 153, 153, 1);
            margin-right: 5px;
            .numData {
              color: rgba(102, 102, 102, 1);
            }
          }
          .itemTimeBox {
            width: 100%;
            display: flex;
            align-items: center;
            & img{
              width: 40%;
              max-width: 80px !important;
            }
            .itemTimeText {
              display: flex;
              flex-flow: column;
              margin-left: 25px;
              .timeTitle {
                font-size: 14px;
                color: rgba(51, 51, 51, 1);
              }
              .timeNum {
                font-size: 18px;
                color: rgba(51, 51, 51, 1);
              }
            }
          }
        }
      }
    }
    .itemStats {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .itemStatsFl {
        margin-top: 50px;
        position: relative;
        // flex: 0.5;
        background-color: #fff;
        .itemStatsFlTab {
          position: absolute;
          top: 10px;
          right: 0;
          & ul {
            display: flex;
            & li {
              width: 42px;
              height: 28px;
              background-color: #fff;
              list-style: none;
              margin-right: 10px;
              text-align: center;
              line-height: 28px;
              color: rgba(184, 196, 209, 1);
              border-radius: 5px;
              border: 1px solid rgba(184, 196, 209, 1);
            }
            .active {
              background-color: rgba(43, 193, 123, 1);
              color: #fff;
            }
          }
        }
      }
      .itemStatsFr {
        margin-top: 50px;
        position: relative;
        // flex: 0.45;
        width: 410px;
        background-color: #fff;
        .twoData {
          position: absolute;
          top: 30px;
          right: 10px;
          & span {
            margin-right: 8px;
          }
        }
      }
    }
  }
</style>