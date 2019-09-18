import Vue from 'vue'

//1.创建组件
import BrotherA from "../components/BrotherA";
import BrotherB from "../components/BrotherB";
import News from "../components/News";
import Goods from "../components/Goods";
import User from "../components/User";
import UserAdd from "../components/User/UserAdd";
import UserList from "../components/User/UserList";
import '../plugins/element.js'
import PCui from "../components/PCui";
//2.配置路由
const routes = [

    { path: '/BrotherA', component: BrotherA },
    // { path: '/BrotherB', component: BrotherB },
    { path: '/BrotherB', component: BrotherB ,name:'brotherb'},
    { path: '/News/:aid', component: News },//动态路由 见底部
    { path: '/Goods', component: Goods },//get方式 见底部
    // { path: '*', redirect: '/BrotherA' },//默认跳转  BrotherA
    {
        path: '/user',
        component: User,
        children:[
            { path: 'useradd', component: UserAdd },
            { path: 'userlist', component: UserList },
        ],
    },

    { path: '/pcUi', component: PCui },

]
export default routes