import VueRouter from "vue-router";
import adsComVue from "@/components/adsCom.vue";
import commodityComVue from "@/components/commodityCom.vue";
import indexComVue from "@/components/indexCom.vue";
import saleComVue from "@/components/saleCom.vue";


export default new VueRouter({
    routes:[
        {
            path:'/',
            component:indexComVue
        },
        {
            path:'/ads',
            component:adsComVue
        },
        {
            path:'/commodity',
            component:commodityComVue
        },
        {
            path:'/index',
            component:indexComVue
        },
        {
            path:'/sale',
            component:saleComVue
        }
    ]
})