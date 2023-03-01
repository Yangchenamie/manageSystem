<template>
  <div class="conItem">
    <p>请输入商品相关信息</p>
    <div class="name">
      <label>商品名称</label>
      <input type="text" placeholder="请输入商品名称" />
    </div>
    <div class="img">
      <label>封面图片</label>
      <!-- 替换一下 -->
      <!-- <img src="../../static/img/btn.png" alt="" /> -->
      <div>
        <div class="addPic">
          <img src="../../static/img/add.png" alt="" />
          <span>上传照片</span>
        </div>
        <span>只能上传jpg/png文件，且不超过500kb</span>
      </div>
    </div>
    <div class="price">
      <label>商品价格</label>
      <input type="text" placeholder="请输入金额" />
      <span>元</span>
    </div>
    <div class="status">
      <label>商品限制</label>
      <input type="radio" name="status" id="" value="0" />
      <label>上架状态</label>
      <input type="radio" name="status" id="" value="1" />
      <label>下架状态</label>
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
  .img{
    & img{
        vertical-align: top;
    }
  }
    .addPic {
      width: 225px;
      height: 150px;
      background-color: #fff;
      border: 1px dotted rgba(184, 196, 209, 1);
      border-radius: 4px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-evenly;
      box-sizing: border-box;
      padding-top: 20px;
      & span {
        // font-size: 14px;
        color: rgba(153, 153, 153, 1);
      }
  }
  .price{
    position: relative;
    & span{
        position: absolute;
        right: 60px;
    }
  }
  .status{
    & input{
        width: 20px;
        height: 20px;
        border: 1px solid rgba(184, 196, 209, 1);      
    }
  }
  .btn{
    width: 100%;
    display: flex;
    justify-content: center;
    & button{
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