<template>
  <div class="conItem">
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
        <span>广告类型</span>
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
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
                    </td>
                </tr>
                <tr>
                    <td>淘我喜欢</td>
                    <td><img src="../../static/img/5.png" alt=""></td>
                    <td>2023.2.20-2023.4.20</td>
                    <td>2s</td>
                    <td>正常</td>
                    <td>
                        <a href="javaScript:;">停用</a>
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
    margin-bottom: 50px;
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