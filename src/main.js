import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import * as echarts from 'echarts'
import VueRouter from 'vue-router'
import router from './router'
import BaiduMap from 'vue-baidu-map'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI,{locale})
Vue.use(VueRouter)
Vue.use(BaiduMap,{
  ak:'TBAK6R61OazEXVbhnmL3uEAZetkIKzBi'
})
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
