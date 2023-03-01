<template>
  <div class="container">
    <div class="containerLeft" v-show="!this.flag">
      <h3>烧烤后台统一管理系统</h3>
      <ul>
        <li>
          <router-link to="/index" active-class="active">首页</router-link></li>
        <li>
          <router-link to="/commodity" active-class="active">商品管理</router-link>
        </li>
        <li><router-link to="/sale" active-class="active">销售管理</router-link></li>
        <li><router-link to="/ads" active-class="active">广告管理</router-link></li>
      </ul>
    </div>
    <div class="containerRight" :class="this.flag == true ? 'noMargin' : ''">
      <div class="containerTab">
        <div class="conTabFl">
          <img src="../../static/img/index.png" alt="" @click="tabHidden" />
          首页
        </div>
        <div class="conTabFr">
          <img src="../../static/img/know.png" alt="" srcset="" />
          <img src="../../static/img/tip.png" alt="" srcset="" />
          <img
            src="../../static/img/tx.png"
            alt=""
            srcset=""value1
            class="photoPerson"
          />
          <span>管理员：00880</span>
          <img src="../../static/img/down.png" alt="" />
          <div class="border"></div>
          <img src="../../static/img/exit.png" alt="" />
          <span>退出</span>
        </div>
      </div>
      <div class="conItemBox">
        <!-- <indexCom></indexCom> -->
        <!-- <commodityCom></commodityCom> -->
        <!-- <saleCom></saleCom> -->
        <!-- <AdsCom></AdsCom> -->
        <!-- <add-commodity></add-commodity> -->
        <!-- <add-ads></add-ads> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import AddCommodity from '@/components/addCommodity.vue';
// import AddAds from '@/components/addAds.vue';
// import CommodityCom from '@/components/commodityCom.vue';
// import SaleCom from '@/components/saleCom.vue';
// import AdsCom from '@/components/adsCom.vue';

// import indexCom from "../src/components/indexCom.vue";
// import  echarts from 'echarts'
export default {
  // components: { indexCom, CommodityCom },
  // components: {  
  //   // CommodityCom, SaleCom, AdsCom ,
  //   // AddCommodity,
  //   AddAds },

  data() {
    return {
      // value1: "",
      flag:false,
    };
  },
  methods: {
    
    tabHidden(){
      this.flag = !this.flag
      console.log(this.flag);
    }
  },
  // mounted() {
  //   this.myEcharts();
  //   this.echartsTwo();
  // },
};
</script>

<style lang="less">
body,
html {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}
.container {
  width: 100%;
  height: 100%;
  // min-width: 1280px;
  min-height: 100%;
  overflow: hidden;
  background-color: rgba(242, 242, 242, 1);
  //   position: relative;
  .containerLeft {
    float: left;
    height: 100%;
    // min-height: 100%;
    width: 280px;
    background-color: rgba(0, 82, 96, 1);
    text-align: center;
    color: #fff;
    padding-top: 50px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;

    & h3 {
      margin-top: 0;
      margin-bottom: 20px;
    }

    & ul {
      padding: 0;
      & li {
        height: 65px;
        line-height: 65px;
        list-style: none;
        background-color: rgba(204, 204, 204, 0.3);
        & a{
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: #fff;
        }
      }
    }

    .active {
      background-color: rgba(0, 186, 173, 0.3);
    }
  }

  .containerRight {
    margin-left: 280px;
    transition: transform 1s;

    .containerTab {
      float: left;
      width: 100%;
      height: 80px;
      display: flex;
      background-color: #fff;
      align-items: center;
      padding: 0 30px;
      box-sizing: border-box;
      justify-content: space-between;
      .conTabFl {
        line-height: 22px;
        & img {
          vertical-align: middle;
          margin-right: 15px;
        }
      }
      .conTabFr {
        // width: 33%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 14px;

        .photoPerson {
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }
        .border {
          width: 1px;
          height: 16px;
          background-color: rgba(216, 216, 216, 1);
        }
        & img ,span,div{
          margin: 0 7px;
          // box-sizing: border-box;
        }
        
      }
    }
  }
}
.noMargin{
    margin-left: 0 !important;
    
  }
</style>