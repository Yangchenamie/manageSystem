<template>
  <div class="con">
    <div class="con-fl">
      <img src="../static/img/1.png" alt="" class="bgPos bgOne" />
      <img src="../static/img/2.png" alt="" class="bgPos bgTwo" />
      <img src="../static/img/3.png" alt="" class="bgPos bgThree" />
      <img src="../static/img/4.png" alt="" class="bgPos bgFour" />
      <p>欢迎回来</p>
      <!-- <span @click="conChange(index)" v-for="(item,index) in data" :key="index" v-show="flag">{{item}}</span> -->
      <span @click="conChange" v-show="flag">没账号，去注册</span>
      <span @click="conChange" v-show="!flag">已有账号，去登录</span>
    </div>  
    <div class="con-fr" v-show="numCon ==0 ">
      <ul>
        <!-- <li class="active">账号密码登录</li>
                <li>手机号登录</li> -->
        <li
          :class="index == number ? 'active' : ''"
          @click="tab(index)"
          v-for="(item, index) in dataList"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
      <form action="" v-show="number == 0">
        <input type="text" name="" id="" placeholder="Email" />
        <img src="../static/img/user.png" alt="" />
        <input type="password" name="" id="" placeholder="密码" />
        <img src="../static/img/psw.png" alt="" />
        <input type="checkbox" name="" id="" /><span>自动登录</span>
        <a href="">忘记密码</a>
      </form>
      <form action="" v-show="number == 1">
        <input type="text" name="" id="" placeholder="手机号码" />
        <img src="../static/img/phone.png" alt="" />
        <input type="text" name="" id="" placeholder="密码" />
        <img src="../static/img/yzm.png" alt="" />
        <button class="getyzm">获取</button>
        <input type="checkbox" name="" id="" /><span>自动登录</span>
        <a href="">忘记密码</a>
      </form>
      <a href="" class="loginBtn">登录</a>
    </div>
    <div class="con-fr noPadding"  v-show="numCon ==1">
      <!-- <ul> -->
      <p class="active">注册</p>
      <!-- <li>手机号登录</li> -->
      <!-- <li :class="index == number ? 'active': ''" @click="tab(index)" v-for="(item,index) in dataList" :key="index">{{item}}</li> -->
      <!-- </ul> -->
      <form action="" v-show="number == 0">
        <input type="text" name="" id="" placeholder="手机号码" />
        <img src="../static/img/phone.png" alt="" />
        <input type="text" name="" id="" placeholder="Email" />
        <img src="../static/img/user.png" alt="" />
        <input type="password" name="" id="" placeholder="密码" />
        <img src="../static/img/psw.png" alt="" />
        <input type="text" name="" id="" placeholder="验证码" />
        <img src="../static/img/yzm.png" alt="" />
        <button class="getyzm">获取</button>
        <input type="checkbox" name="" id="" /><span>自动登录</span>
        <!-- <a href="">忘记密码</a> -->
      </form>
      <a href="" class="loginBtn">注册</a>
      <span class="textReg">注册即表示您已阅读并同意《隐私政策》和《用户协议》</span>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  data() {
    return {
      number: 0,
      dataList: ["账号密码登录", "手机号登录"],
      numCon:0,
      data:['没账号，去注册','已有账号，去登录'],
      flag:true
    };
  },
  methods: {
    tab(index) {
      this.number = index;
    },
    conChange(){
        if(this.numCon != 1){
            this.numCon = 1
        
        }else{
            this.numCon = 0
        }
        this.flag = !this.flag
    }
  },
};
</script>

<style lang="less">
.con {
  display: flex;
  margin: auto;
  width: 800px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;

  .con-fl {
    position: relative;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
    width: 30%;
    min-width: 340px;
    height: 100%;
    background-image: linear-gradient(
      to top,
      rgba(60, 176, 158, 1),
      rgba(0, 82, 96, 1)
    );
    color: #fff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    & p {
      font-size: 28px;
      margin-bottom: 76px;
      margin-top: -60px;
    }

    & span {
      padding: 19px 65px;
      border: 2px solid #fff;
      border-radius: 32.5px;
      font-size: 14px;
    }

    .bgPos {
      position: absolute;
    }

    .bgOne {
      bottom: 100px;
      right: 70px;
    }

    .bgTwo {
      bottom: 0;
      left: 0;
    }

    .bgThree {
      top: 50px;
      right: 100px;
    }

    .bgFour {
      right: 0;
    }
  }

  .con-fr {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 70%;
    padding: 94px 80px 0;
    box-sizing: border-box;
    // background-color: red;
    min-width: 430px;

    ul {
      width: 100%;
      display: flex;
      // justify-content: space-around;
      padding: 0;
      margin-bottom: 44px;
      height: 32px;
      align-items: flex-end;
      li {
        list-style: none;
        color: rgba(0, 0, 0, 1);
        // font-size: 24px;
      }
      :nth-child(1) {
        margin-right: 50px;
      }
    }

    .active {
      color: rgba(0, 82, 96, 1);
      font-size: 24px;
    }

    form {
      position: relative;

      & input {
        height: 50px;
        width: 98%;
        border-radius: 5px;
        background: rgba(245, 249, 250, 1);
        margin-bottom: 30px;
        border: none;
        padding: 0 55px;
        box-sizing: border-box;

        :root {
          border: 1px solid rgba(0, 82, 96, 1);
        }
      }

      & img {
        position: absolute;
        width: 25px;
        height: 25px;
        left: 18px;
        margin-top: 11px;
      }

      & input[type="checkbox"] {
        width: 16px;
        height: 16px;
        vertical-align: bottom;
        margin-bottom: 0 !important;
        margin-right: 5px;
      }

      span {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }

      a {
        float: right;
        font-size: 14px;
        text-decoration: none;
        color: rgba(25, 137, 250, 1);
      }
    }

    .loginBtn {
      padding: 15px 104px;
      color: #fff;
      font-size: 18px;
      background: rgba(0, 82, 96, 1);
      border-radius: 32.5px;
      text-decoration: none;
      margin-top: 72px;
    }
    .loginBtn {
      margin-top: 32px;
    }
    .getyzm {
      position: absolute;
      width: 90px;
      height: 50px;
      background-color: transparent;
      border: none;
      right: 5px;
    }
  }
  .noPadding {
    padding-top: 0;
  }
  .textReg{
    font-size: 10px;
    margin-top: 20px;
  }
}
</style>