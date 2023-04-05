<template>
  <div>
    <div class="conItem" v-if="flag">
    <div class="conItemTab">
      <div class="tabItem">
        <span>广告状态</span>
        <select>
          <option>全部</option>
          <option>全部</option>
          <option>全部</option>
        </select>
      </div>
      <div class="tabItem">
        <span>广告标语</span>
        <input type="text" placeholder="请输入您想查询的关键词" />
        <button>查询</button>
      </div>
      <div class="btn" @click="flag = false">
        +新增商品
      </div>
    </div>
    <div class="middle">
      <div class="middleCon">
        <div class="middleTable">
            <table>
                <tr>
                    <th>广告标语</th>
                    <th>封面</th>
                    <th>投放时间</th>
                    <th>轮番时间</th>
                    <th>投放状态</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item,index) in vdeioList" :key="index">
                    <td class="text">{{ item.title }}</td>
                    <td><img :src="item.coverURL" alt=""></td>
                    <td>{{ item.createTime }}</td>
                    <td>{{ item.duration }}s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
            </table>
        </div>
      </div>
      <div class="pagerBox">
        <div @click="lastPages">&lt;</div>
        <div
          v-for="(item, index) in array"
          :key="index"
          :class="item == current ? 'active' : ''"
          @click="changePage(item)"
        >
          {{ item }}
        </div>
        <div @click="nextPages">></div>
      </div>
    </div>
  </div>
  <AddAds v-else @change="changeFlag($event)"></AddAds>
  </div>
</template>

<script>
import AddAds from './addAds.vue';

export default {
    // name:"indexCom"
    data() {
        return {
            vdeioList: {},
            flag: true,
            array: [],
            current: 1,
            adsNum:0
        };
    },
    mounted() {
      this.getAdsNum()
        this.getAdsList();
        
    },
    methods: {
      changeFlag(val){
        this.flag  = val
      },
        async getAdsNum(){
          const {data} = await this.$http({
            url:"/manage/video/getPlayNumber"
          })
          this.adsNum = data.data.number
          this.getPages(this.adsNum)
        },
        getPages(val){
          const num = Math.ceil(val / 10)
          console.log(num);
          for(let i=1;i<=num;i++){
            this.array.push(i);
          }
          console.log(this.array);
        },
        async getAdsList(id) {
            if (id == null) {
                id = 1;
            }
            const { data } = await this.$http({
                url:`/manage/video/getPlayAuthPages/${id}`
            });
            console.log(data);
            this.vdeioList = data.data.videoList;
            console.log(this.vdeioList);
        },
        changePage(index) {
            this.current = index;
                this.getAdsList(this.current);

        },
        lastPages() {
            if (this.current == 1) {
                return;
            }
            this.current--;
            this.getAdsList(this.current);
        },
        nextPages() {
            if (this.current == 9)
                return;
            this.current++;
            this.getAdsList(this.current);
        }
    },
    components: { AddAds }
};
</script>

<style scoped lang="less">
.conItem {
  float: left;
  width: 100%;
  padding: 37px 40px 0;
  box-sizing: border-box;
  margin-bottom: 30px;
  .conItemTab {
    display: flex;
    margin-bottom: 50px;
    & .btn{
      margin-left: 30px;
      height: 32px;
      width: 112px;
      line-height: 32px;
      font-size: 14px;
      color: #fff;
        background-color: rgba(0, 186, 173, 1);
        border-radius: 3px;
        text-align: center;
      }
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
        margin-bottom: 50px;
      .middleTab {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        // justify-content: center;
        & input {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        & label {
          margin-right: 30px;
        }
      }
      .middleTable{
        // display: flex;
        width: 100%;
        & table{
            // display: flex;
            width: 100%;
            // justify-content: space-between;
            // flex-flow: column;
            // align-items: center;
            & .text{
              padding-left: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            & tr{
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                height: 84px;
                padding: 0 !important;
                & th{
                    height: 100%;
                    flex: 1;
                    // padding: 0 30px;
                    background-color: rgba(0, 186, 173, 0.3);
                    line-height: 84px;
                }
                & td{
                    flex: 1;
                    & a{
                       padding: 6px 25px; 
                       background: rgba(0, 186, 173, 0.3);
                       text-decoration: none;
                       color: rgba(255, 87, 51, 1);
                    }
                    .action{
                        color: rgba(6, 107, 100, 1);
                        background-color: #fff;
                    }
                }
                & img{
                    height: 70px;
                    vertical-align: middle;
                }
            }
            & tr:nth-child(odd) {
                background-color: #fff;
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
}
</style>