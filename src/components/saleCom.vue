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
        <span>地区</span>
        <select>
          <option>全部</option>
          <option>全部</option>
          <option>全部</option>
        </select>
      </div>
      <div class="tabItem">
        <span>用户名称</span>
        <input type="text" placeholder="请输入您想查询的关键词" />
        <button>查询</button>
      </div>
    </div>
    <div class="middle">
      <div class="middleCon">
        <div class="middleTab">
          <input type="radio" name="situation" value="0" checked="checked" />
          <label>司机情况</label>
          <input type="radio" name="situation" value="1" />
          <label>站场情况</label>
        </div>
        <div class="middleTable">
            <!-- <table>
                <tr>
                    <th>机器编码</th>
                    <th>用户名</th>
                    <th>司机名称</th>
                    <th>车牌号</th>
                    <th>使用时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;" class="action">停用</a>
                    </td>
                </tr>
            </table> -->
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
                <tr>
                    <td>81806104</td>
                    <td>星星充电汽车充电站</td>
                    <td>李二龙</td>
                    <td>韶关市大学路111号</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>81806104</td>
                    <td>18810086122</td>
                    <td>李二龙</td>
                    <td>粤GD10086</td>
                    <td>00：00-23：59</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;" class="action">停用</a>
                    </td>
                </tr>
            </table>
        </div>
      </div>
      <div class="pagerBox">
        <div><</div>
        <div>1</div>
        <div class="active">2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name:"indexCom"
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
            & tr{
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                height: 70px;
                & th{
                    height: 100%;
                    flex: 1;
                    // padding: 0 30px;
                    background-color: rgba(0, 186, 173, 0.3);
                    line-height: 70px;
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