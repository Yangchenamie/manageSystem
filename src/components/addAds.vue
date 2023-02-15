<template>
  <div class="conItem">
    <p>请输入广告相关信息</p>
    <div class="name">
      <label>广告标语</label>
      <input type="text" placeholder="请输入商品名称" />
    </div>
    <div class="img">
      <label>封面图片</label>
      <!-- 替换一下 -->
      <img src="../../static/img/btn.png" alt="" />
    </div>
    <div class="status">
      <label>商品限制</label>
      <input type="radio" name="status" id="" value="0" />
      <label>上架状态</label>
      <input type="radio" name="status" id="" value="1" />
      <label>下架状态</label>
    </div>
    <div class="time">
      <label>投放时长</label>
      <select name="" id="">
        <option value="">2</option>
        <option value="">4</option>
        <option value="">6</option>
        <option value="">8</option>
      </select>
      <span for="">秒</span>
    </div>
    <div class="btn">
      <button>确认</button>
      <button>取消</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.conItem {
  width: 564px;
  height: 600px;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  & p {
    font-size: 20px;
  }
  & div {
    line-height: 40px;
    & label {
      margin-right: 30px;
    }
    & input {
      width: 300px;
      height: 40px;
      padding: 0 15px;
      border: 1px solid rgba(184, 196, 209, 1);
    }
  }
  .img {
    & img {
      vertical-align: top;
    }
  }
  .time {
    & select {
      width: 101px;
      height: 40px;
      text-align: center;

      border: 1px solid rgba(229, 229, 229, 1);
    }
    & span {
      margin-left: 22px;
    }
  }
  .status {
    display: flex;
    align-items: center;
    & input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    & button {
      width: 76px;
      height: 40px;
      background-color: rgba(6, 107, 100, 1);
      color: #fff;
      border: none;
      border-radius: 4px;
      margin: 0 12px;
    }
  }
}
</style>