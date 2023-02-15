<template>
  <div class="conItem">
    <div class="conItemTab">
      <div class="tabItem">
        <span>商品状态</span>
        <select>
          <option>全部</option>
          <option>全部</option>
          <option>全部</option>
        </select>
      </div>
      <div class="tabItem">
        <span>商品类型</span>
        <select>
          <option>全部</option>
          <option>全部</option>
          <option>全部</option>
        </select>
      </div>
      <div class="tabItem">
        <span>商品名称</span>
        <input type="text" placeholder="请输入您想查询的关键词" />
        <button>查询</button>
      </div>
    </div>
    <div class="middle">
      <div class="middleCon">
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
        <div class="middleItem">
          <div class="circle"></div>
          <img src="../../static/img/coke.png" alt="" />
          <span>可口可乐350ml</span>
          <span class="itemMoney">￥3.5</span>
          <div class="btn">
            <button>编辑</button>
            <button>下架</button>
          </div>
        </div>
      </div>
      <div class="pagerBox">
        <div><</div>
        <div>1</div>
        <div class="active">2</div>
        <div>3</div>
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

<style lang="less">
.conItem {
  float: left;
  width: 100%;
  padding: 37px 40px 0;
  box-sizing: border-box;
  margin-bottom: 30px;
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
}
</style>