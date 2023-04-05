import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import * as echarts from 'echarts'
import VueRouter from 'vue-router'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import axios from 'axios'
import '../src/assets/css/index.css'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
//挂载  在其他组件中，用this.$http
axios.defaults.baseURL =  "http://1.12.244.193:80"
Vue.prototype.$http = axios
Vue.use(ElementUI,{locale})
Vue.use(VueRouter)
Vue.use(BaiduMap,{
  ak:'TBAK6R61OazEXVbhnmL3uEAZetkIKzBi'
})
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
