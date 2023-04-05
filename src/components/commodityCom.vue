<template>
  <div class="conItem">
    <!-- 第一种 -->
    <!--center 显示中心位置 lng经度 lat纬度     zoom 视图的缩放比例 -->
    <!-- <!- scroll-wheel-zoom是否允许用鼠标滚轮缩放 -->
    <baidu-map class="map" :center="{ lng: 113.280637, lat: 23.125178 }" :zoom="15" :scroll-wheel-zoom="true">
      <!--地图类型，两种：一种是路线一种是绿的那种-->
      <!-- <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type> -->
      <!--是否显示标注-->
      <!-- <div v-if="locationFlag"> -->
      <bm-marker v-for="(item, index) in mapList" :key="index" :position="{ lng: item.location.x, lat: item.location.y }"
        :dragging="true" @click="showInfo(item.supplementNumber,item.name)" />
      <!-- <bm-info-window
        :position="{ lng: 113.67669, lat: 24.780387 }"
        title="星星充电汽车充电站"
        :show="infoWindow.show"
        @close="infoWindowClose"
        @open="infoWindowOpen"
      >
        <div class="infoBox">
          <div class="infoItem">
            <img src="../../static/img/coke.png" alt="" />
            <p>可口可乐350ml</p>
            <button @click="clear">下架</button>
          </div>
          <div class="infoItem">
            <img src="../../static/img/coke.png" alt="" />
            <p>可口可乐350ml</p>
            <button @click="clear">下架</button>
          </div>
          <div class="infoItem">
            <img src="../../static/img/coke.png" alt="" />
            <p>可口可乐350ml</p>
            <button @click="clear">下架</button>
          </div>
        </div>
      </bm-info-window> -->
      <!-- </div> -->
      <!--搜索功能-->
      <!--display: none样式很关键，因为下面默认会有地址提示信息很长，很烦，这样搜索会很舒服，-->
      <!-- <bm-local-search
        :keyword="keyword"
        :auto-viewport="true"
        zoom="12.8"
        style="display: none"
      ></bm-local-search> -->
      <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>
    <div class="searchBox">
      <div class="SEarch">
        <!-- <el-input
          v-model="SearchKw"
          placeholder="请输入您的目标地点"
          @input="search($event)"
          class="searInput"
        ></el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          class="SEARCH"
          @click="getSearchList"
        ></el-button> -->
        <input type="text" placeholder="请输入您想查询的关键词" v-model="SearchKw" @blur="lostBlur()" />
        <button @click="getSearchList">查询</button>
      </div>
      <!-- 数据容器 -->
      <div class="rResult" v-if="flag">
        <p class="title" >{{ shopName }}</p>
        <div class="infoBox">
          <div class="infoItem" v-for="(item,index) in goodsList" :key="index">
            <div class="infoFl">
              <img :src="item.productPicture" alt="" />
            <div class="goods">
              <p>{{ item.productName }}</p>
              <p> {{ item.productPrice }}</p>
            </div>
            </div>
            <button @click="clear">下架</button>
          </div>
          
        </div>
      </div>
      <div  class="rResult" v-else>
          <p class="title">搜索结果</p>
        <div class="infoBox">
          <div class="infoItem" v-for="(item, index) in searchList">
            <img :src="item.picture" alt="" />
            <div class="goods">
              <p>{{ item.name }}</p>
              <p>{{ item.address }}</p>
            </div>
          </div>
        </div>
        </div>
    </div>
    <!-- 第二种 -->
  </div>
</template>

<script>
// import { defineComponent } from 'vue'
// 参数取值
import { EluiChinaAreaDht } from "elui-china-area-dht";
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat;
export default {
  // name:"indexCom"
  data() {
    return {
      keywordReady: "", //在输入框中输入的值
      add: {
        siteName: "",
        site: "",
        jd: "",
        wd: "",
        desce: "",
        type: "",
        jgName: "",
        jgNum: "",
      },
      postionMap: {
        //地图坐标
        lng: 120.211486,
        lat: 30.256576,
      },
      // keyword: "", //搜索框关键词
      locationFlag: "",
      infoWindow: {
        show: false,
        // contents:
        //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      mapList: [],
      SearchKw: '',
      searchList: [],
      goodsList:[],
      flag:true,
      shopName:''
    };
    // 第二种
  },
  mounted() {
    this.getMapList()

  },
  methods: {
    onChange(e) {
      const one = chinaData[e[0]];
      const two = chinaData[e[1]];
      console.log(one, two);
    },
    infoWindowClose() {
      this.infoWindow.show = false;
    },
    infoWindowOpen() {
      this.infoWindow.show = true;
    },
    clear() {
      this.infoWindow.contents = "";
    },
    async showInfo(supplementNumber,name) {

      this.shopName = name
      console.log(supplementNumber);
      const res = await this.$http({
        // url:`/supplement/product/selectAll/${supplementNumber}`
        url:"/supplement/product/selectAll/8007"
      })
      this.goodsList = res.data.data.list
      console.log(this.goodsList);
      this.flag = true
    },
    //出现标注地址
    getFlag() {
      this.locationFlag = true;
    },
    //取消标注
    cancelFlag() {
      this.locationFlag = false;
    },
    async getMapList() {
      const res = await this.$http({
        url: '/map/selectAll'
      })
      console.log(res);
      this.mapList = res.data.data.list
      console.log(this.mapList);
    },
    lostBlur() {
      console.log(this.SearchKw);
      const kw = this.SearchKw
    },
    async getSearchList() {

      console.log('-00000',this.SearchKw);
      const kw = this.SearchKw
      const res = await this.$http({
        url: `/map/selectName?name=${kw}`,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      console.log('搜索',res);
      this.searchList = res.data.data.list
      this.flag = false
    }
  },
};
</script>

<style scoped lang="less">
.conItem {
  float: left;
  width: 100%;
  padding: 37px 40px 0;
  box-sizing: border-box;
  margin-bottom: 30px;
  width: 100%;
  position: relative;

  .map {
    width: 100%;
    height: 800px;
  }

  .conItemTab {
    display: flex;
    margin-bottom: 90px;

    .tabItem {
      margin-right: 42px;
      color: rgba(166, 166, 166, 1);

      & span {
        margin-right: 18px;
      }

      & select {
        width: 101px;
        padding: 0 12px;
        box-sizing: border-box;
        height: 32px;
        border: 1px solid rgba(229, 229, 229, 1);
        color: rgba(153, 153, 153, 1);
      }

      & input {
        width: 230px;
        height: 32px;
        border: 1px solid rgba(229, 229, 229, 1);
        box-sizing: border-box;
        margin-right: 23px;
        padding: 0 12px;
      }

      & button {
        width: 70px;
        height: 32px;
        background-color: rgba(6, 107, 100, 1);
        border: none;
        color: #fff;
        border-radius: 3px;
      }
    }
  }

  .middle {
    .middleCon {
      display: flex;
      flex-wrap: wrap;

      .middleItem {
        position: relative;
        display: flex;

        flex-flow: column;
        height: 266px;
        max-height: 266px;
        width: 23%;
        margin: 0 10px 56px;
        // padding:0  20px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        align-items: center;
        text-align: left;
        justify-content: center;
        line-height: 25px;

        .circle {
          width: 20px;
          height: 20px;
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(166, 166, 166, 1);
          left: 20px;
          top: 20px;
        }

        & img {
          width: 100px;
          height: 100px;
          margin-bottom: 20px;
        }

        .itemMoney {
          font-size: 18px;
          font-weight: 500;
        }

        .btn {
          margin-top: 10px;

          & button {
            width: 70px;
            height: 32px;
            margin: 0 5px;
            border-radius: 3px;
            background: rgba(246, 246, 246, 1);

            border: 1px solid rgba(229, 229, 229, 1);
            color: rgba(128, 128, 128, 1);
          }
        }
      }
    }

    .pagerBox {
      float: right;
      display: flex;
      //   align-items: center;
      text-align: center;
      line-height: 32px;
      color: rgba(0, 0, 0, 0.65);

      & div {
        width: 32px;
        height: 32px;
        border-radius: 2px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(0, 0, 0, 0.15);
        margin: 0 12.5px;
      }

      .active {
        background-color: rgba(6, 107, 100, 1);
        color: #fff;
      }
    }
  }

  // 百度地图
  .infoBox {
    display: flex;
    flex-flow: column;
    // margin-top: 20px;
    height: 320px;
    overflow: hidden;
    overflow-y: scroll;

    .infoItem {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      justify-content: space-between;

      & .infoFl{
        display: flex;
        flex-flow:row;
        align-items: center;
      }

      & img {
        width: 75px;
        height: 75px;
      }

      .goods {
        display: flex;
        flex-flow: column;
        height: 100%;
        justify-content: space-evenly;
        margin-left: 20px;

        & p {
          overflow: hidden;
          /*超出部分隐藏*/
          white-space: nowrap;
          /*禁止换行*/
          text-overflow: ellipsis;
          /*省略号*/

        }
      }

      & button {
        width: 70px;
        height: 32px;
        margin: 0 5px;
        border-radius: 3px;
        background: rgba(246, 246, 246, 1);
        margin-right: 10px;
        border: 1px solid rgba(229, 229, 229, 1);
        color: rgba(128, 128, 128, 1);
      }
    }
  }

  .searchBox {
    width: 350px;
    position: absolute;
    z-index: 999;
    top: 60px;
    left: 80px;

    .title {
      line-height: 60px;
      height: 60px;
    }

    & p {
      margin: 0 !important;
    }

    & input {
      width: 230px;
      height: 32px;
      border: 1px solid rgba(229, 229, 229, 1);
      box-sizing: border-box;
      margin-right: 23px;
      padding: 0 12px;
    }

    & button {
      width: 70px;
      height: 32px;
      background-color: rgba(6, 107, 100, 1);
      border: none;
      color: #fff;
      border-radius: 3px;
    }

    .SEarch {
      display: flex;

      .searInput {
        width: 300px;
      }
    }

    .rResult {
      background-color: #fff;
      // height: 99px;
      width: 100%;
      margin-top: 20px;
      height: 390px;
      padding:0 15px;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }
}</style>