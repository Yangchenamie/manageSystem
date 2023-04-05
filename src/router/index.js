import VueRouter from "vue-router";
import adsComVue from "@/components/adsCom.vue";
import commodityComVue from "@/components/commodityCom.vue";
import indexComVue from "@/components/indexCom.vue";
import saleComVue from "@/components/saleCom.vue";
import addAds from "@/components/addAds.vue";
import ScreenPage from '../page/mainPage.vue'
import loginPage from '../page/loginPage.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:"loginPage",
            component:loginPage,
        },
        {
            path:'/screenPage',
            name:"screenPage",
            component:ScreenPage,
            redirect:"/screenPage/index",
            children:[
                {
                    path:'/screenPage/ads',
                    component:adsComVue
                },
                {
                    path:'/screenPage/commodity',
                    component:commodityComVue
                },
                {
                    path:'/screenPage/index',
                    component:indexComVue
                },
                {
                    path:'/screenPage/sale',
                    component:saleComVue
                },
                {
                    path:'addAda',
                    component:addAds
                },
            ]
        }
    ]
})