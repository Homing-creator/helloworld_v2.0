import Vue from 'vue'
import App from './App.vue'


import './assets/css/style.css';
// import './assets/css/basic.scss';
import VueResource from 'vue-resource';
Vue.use(VueResource);

//element-ui使用


//mintUIde 使用
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
/*vue路由配置
1.安装  cnpm install vue-router --save
2.引入并使用   （main.js）
    import VueRouter from 'vue-router'
    Vue.use(VueRouter);
3.配置路由
    一、创建组件，引入组件
          const Foo = { template: '<div>foo</div>' }
          const Bar = { template: '<div>bar</div>' }
    二、定义路由 （建议复制）
        const routes = [//这个routers相当于下面的R
            { path: '/foo', component: Foo },
            { path: '/bar', component: Bar }
        ]
    三、实例化VueRouter
          const router = new VueRouter({
            routes // 相当于 `routes: routes`即`routers: R`
          })
    四、挂载
          const app = new Vue({
              router
            }).$mount('#app')
        或者
          new Vue({
              el: '#app',
              router,
              render: h =>h(App)
          })
*/


/*//1.创建组件
import BrotherA from "./components/BrotherA";
import BrotherB from "./components/BrotherB";
import News from "./components/News";
import Goods from "./components/Goods";
import User from "./components/User";
import UserAdd from "./components/User/UserAdd";
import UserList from "./components/User/UserList";
import './plugins/element.js'
import PCui from "./components/PCui";
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

]*/

import routes from "./router/router";//模块化方式引入路由

//3.实例化VueRouter
const router = new VueRouter({
  // mode:'history',//hash模式改为history模式   默认为 hash模式
  routes
})
//4.挂载路由
// const app = new Vue({
//   router
// }).$mount('#app')
// new Vue({
//   el: '#app',
//   router,
//   render: h =>h(App)
// })
//5.        <router-view></router-view> 放在App.vue 根组件的根节点里面，即div里


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

/*
配置动态路由
1、配置动态路由
      const routes = [
        { path: '/News/:aid', component: News },//动态路由
      ]
2、在对应的页面
      this.$route.params获取动态路由的值
*/
