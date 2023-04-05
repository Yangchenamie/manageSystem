<template>
  <div class="pagerBox">
    <div @click="previous">&lt;</div>
    <div
      v-for="(item, index) in listss"
      :key="index"
      :class="item == ind ? 'active' : ''"
      @click="changePage(item),getDetail"
    >
      {{ item }}
    </div>
    <div @click="next">></div>
  </div>
</template>

<script>
export default {
    props:['list',"lists",],
  data() {
    return {
      listss:[], // 渲染数组
      index: 5, // 省略长度
      ind: 1
    }
  },
  created(){
    console.log(this.list.length);
    this.getListss()
  },
  mounted(){
    // this.ind = 1;
    console.log(2222);
    
    
  },
  watch:{
    list:function(){
      this.getListss()
    },
    ind:function(val){
      this.$emit('current',val)

    }
  },
  methods: {
    getDetail(val){this.$emit('getDetail',val)},
    getListss(){
        if (this.list.length > this.index) {
        console.log(1);
        var arr = []
        for (var i = 0; i < this.list.length; i++) {

          arr.push(this.list[i])
        }
        arr.splice(Math.floor(this.index / 2), (arr.length - this.index) + 1, '...')
        this.listss = arr
        console.log('listss', this.listss);
      }
      console.log(this.list);
    console.log('----',this.list,this.lists);
    },
    changePage(index) {
      console.log(index);
      console.log('change', this.ind);
      let start = 0;
      let end = 0
      if (index > this.ind) {

        console.log(this.lists);
        for (let i = 0; i < this.lists.length; i++) {
          if (this.lists[i] == index) {
            console.log(i);
            end = i;
          }
          if (this.lists[i] == this.ind) {
            start = i;
          }
        }
        this.ind = index
        console.log(this.ind, start, end);
        for (let i = start; i < end; i++) {
          this.lists.shift()
        }
        this.shuzhu(this.list, this.ind, this.lists)
        console.log(this.lists);
      }
      else if (index < this.ind) {
        // this.ind = index
        for (let i = index; i < this.ind; i++) {
          this.lists.unshift(this.lists[0] - 1)
        }
        this.ind = index
        this.shuzhu(this.list, this.ind, this.lists)
        console.log(this.lists);

      }
      this.getDetail(this.ind)
    },
    previous() {
      console.log('last', this.ind);
      if (this.ind > 1) {
        this.ind--
        // 改变数组
        console.log('last', this.ind);
        this.lists.unshift(this.lists[0] - 1)
        console.log('last', this.lists);
        this.shuzhu(this.list, this.ind, this.lists)
       this.getDetail(this.ind)
      } else {
        console.log('第一页')
      }
    },
    next() {

      if (this.ind < this.list.length) {
        this.ind++
        // 改变数组
        console.log('next', this.ind);
        this.lists.shift()
        console.log('next', this.lists);
        this.shuzhu(this.list, this.ind, this.lists)
        this.getDetail(this.ind)
      } else {
        console.log('最后一页')
      }
    },
    shuzhu(arr, index, list) {
      if (index >= arr.length - (this.index - 1)) {
        this.listss = []
        var num = this.index
        for (var i = 0; i < this.index; i++) {
          this.listss.push(arr[arr.length - num])
          num--
        }
      } else {
        var arrs = []
        for (var i = 0; i < list.length; i++) {
          arrs.push(list[i])
        }
        arrs.splice(Math.floor(this.index / 2), (arrs.length - this.index) + 1, '...')
        this.listss = arrs
      }
    },
  }
}
</script>

<style lang="less" scoped>
.pagerBox {
    margin-top: 50px;
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
</style>