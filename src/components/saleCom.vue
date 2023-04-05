<template>
  <div class="conItem">
    <div class="conItemTab">
      <div class="tabItem">
        <span>机器状态</span>
        <select>
          <option>全部</option>
          <option>全部</option>
          <option>全部</option>
        </select>
      </div>
      <div class="tabItem">
        <span>用户名称</span>
        <input type="text" placeholder="请输入您想查询的关键词" v-model="keyWord" @blur="lostBlur()" />
        <button @click="getSearchList">查询</button>
      </div>
    </div>
    <div class="middle">
      <div class="middleCon">
        <div class="middleTab">
          <input type="radio" name="situation" value="0" checked="checked" @click="changeTab" />
          <label>司机情况</label>
          <input type="radio" name="situation" value="1" @click="changeTab" />
          <label>站场情况</label>
        </div>
        <div class="middleTable">
          <div v-if="this.flag">
            <table>
              <tr>
                <th>机器编码</th>
                <th>用户名</th>
                <th>司机名称</th>
                <th>车牌号</th>
                <th>使用时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item, index) in driverList" :key="index">
                <td>{{ item.machineNumber }}</td>
                <td>{{ item.mobilePhone }}</td>
                <td>{{ item.userName }}</td>
                <td>{{ item.userNickname }}</td>
                <td>00：00-23：59</td>
                <td v-if="item.status == 1">正常</td>
                <td v-else>异常</td>
                <td @click="start(item.id, item.status)">
                  <a href="javaScript:;" v-if="item.status == 1">停用</a>
                  <a href="javaScript:;" v-else>启动</a>
                </td>
              </tr>
            </table>
            <paginationCon @current="getCurrent($event)" v-show="pageFlag" :list="list" :lists="lists"
              @getDetail="getDetail"></paginationCon>
          </div>
          <div v-else>
            <table>
              <tr>
                <th>站场编码</th>
                <th>站场名</th>
                <th>管理员</th>
                <th>地址</th>
                <th>营业时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item, index) in mapList" :key="index">
                <td>{{ item.supplementNumber }}</td>
                <td>{{ item.name }}</td>
                <td>李二龙</td>
                <td>{{ item.address }}</td>
                <td>{{ item.hours }}</td>
                <td v-if="item.status == 1">正常</td>
                <td v-else>异常</td>
                <td>
                  <a href="javaScript:;">停用</a>
                </td>
              </tr>
            </table>
            <paginationCon  @current="getCurrent($event)" v-show="pageFlag" :list="list" :lists="lists" @getDetail="getDetail"></paginationCon>
          </div>
        </div>
      </div>
      <!-- <div class="pagerBox">
        <div @click="previous">&lt;</div>
        <div
          v-for="(item, index) in listss"
          :key="index"
          :class="item == ind ? 'active' : ''"
          @click="changePage(item)"
        >
          {{ item }}
        </div>
        <div @click="next">></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import paginationCon from './paginationCon.vue';


export default {
  components: { paginationCon },
  data() {
    return {
      flag: true,
      driverList: [],
      mapList: [],
      list: [],
      lists: [],
      current:1,
      // current: 1,
      currentMap: 1,
      currentDriver: 1,
      flag: true,
      keyWord: '',
      pageFlag: true,
    };
  },
  mounted() {
    this.getDriverDetail(this.currentDriver);
    this.getDriverList()
    console.log(this.list, this.lists);
  },
  watch: {

  },
  methods: {
    getCurrent(val) {
      if (this.flag == true) {
        console.log('ind', val);
        this.currentDriver = val
      } else {
        this.currentMap = val
      }
    },
    lostBlur() {
      console.log(this.keyWord);
      const kw = this.keyWord
      if (kw == null || kw == '') {
        if (this.flag == true) {
          this.getDetail(this.currentDriver)
          this.pageFlag = true
        }else{
          this.getDetail(this.currentMap)
        }
      }
    },
    async getSearchList() {
      const kw = this.keyWord
      if (kw) {
        if (this.flag == true) {
          const res = await this.$http({
            url: `/driver/member/selectName?name=${kw}`,
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          console.log(res.data.data.list.length);
          this.driverList = res.data.data.list
        } else {
          const res = await this.$http({
            url: `/map/selectName?name=${kw}`,
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          console.log(res.data.data.list.length);
          this.mapList = res.data.data.list
        }
        this.pageFlag = false
      }
    },
    async start(id, status) {
      if (status == 0) {
        status = 1
      } else status = 0
      const res = await this.$http({
        url: "/driver/member/status",
        method: 'POST',
        data: {
          "id": id,
          "status": status
        }
      })
      console.log(res);
      if (res.data.code == 200) {
        this.getDetail(this.current)
      }
    },
    getDetail(id) {
      if (this.flag) {
        this.getDriverDetail(id)
      } else
        this.getMapDetail(id)
    },
    getDriverList() {
      this.getDriverNum()
      console.log('-----111', this.list);
    },
    getMapList() {
      this.getMapNum()
      console.log('-----222', this.list);
    },
    async getDriverNum() {
      const { data } = await this.$http({
        url: "/driver/member/count"
      })
      const num = data.data.number
      this.getPages(num)
    },
    getPages(val) {
      const num = Math.ceil(val / 10);
      this.list = []
      this.lists = []
      for (let i = 1; i <= num; i++) {
        this.list.push(i)
        this.lists.push(i)
      }
    },
    changeTab() {
      this.flag = !this.flag;
      // this.getDetail(this.current);
      if (this.flag == true) {
        this.current = this.currentDriver;
        this.getDriverDetail(this.currentDriver);
        this.getDriverList()
        // console.log('current的值'+ this.current);
        // console.log('current1的值'+ this.current1);
      }
      else {
        this.current = this.currentMap;
        this.getMapDetail(this.currentMap);
        console.log(this.currentMap);
        this.getMapList()
        // console.log('current的值'+ this.current);
        // console.log('current2的值'+ this.current2);
      }
    },
    async getDriverDetail(id) {
      const { data } = await this.$http({
        url: `/driver/member/select/${id}`,
      });
      console.log(data);
      this.driverList = data.data.list.records;
      console.log(this.driverList);
    },
    async getMapDetail(id) {
      const { data } = await this.$http({
        url: `/map/getAll/${id}`
      });
      console.log(data);
      this.mapList = data.data.list;
    },
    async getMapNum() {
      const map = await this.$http({
        url: "/map/select"
      })
      console.log(map);
      const num = map.data.data.number
      this.getPages(num)
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

  .conItemTab {
    display: flex;
    margin-bottom: 20px;
    align-items: center;

    & .btn {
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

      // margin-bottom: 50px;
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

      .middleTable {
        // display: flex;
        width: 100%;

        & table {
          // display: flex;
          width: 100%;

          // justify-content: space-between;
          // flex-flow: column;
          // align-items: center;
          & tr {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            height: 70px;

            & th {
              height: 100%;
              flex: 1;
              // padding: 0 30px;
              background-color: rgba(0, 186, 173, 0.3);
              line-height: 70px;
            }

            & td {
              flex: 1;

              & a {
                padding: 6px 25px;
                background: rgba(0, 186, 173, 0.3);
                text-decoration: none;
                color: rgba(255, 87, 51, 1);
              }

              .action {
                color: rgba(6, 107, 100, 1);
                background-color: #fff;
              }
            }
          }

          & tr:nth-child(even) {
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