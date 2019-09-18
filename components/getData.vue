<template>
    <div>
<!--        vue-resource方式  官方的插件-->
<!--        vue-resource使用方式：-->
<!--        1、安装   打开项目，在cmd中操作-->
<!--                cnpm install vue-resource &#45;&#45;save// 在GitHub里面搜axios  注意加&#45;&#45;save-->
<!--        2、main.js中引入vue-resource-->
<!--                import VueResource from 'vue-resource'-->
<!--                        此处的VueResource为变量名，可以随意命名。-->
<!--        3、接着使用vue-resource-->
<!--                Vue.use(VueResource);-->
<!--        4、在组件里面直接使用-->
<!--                this.$http.get(地址).then(founction(response){         -->
<!--        response为变量，存放接收到的数据对象-->
<!--                },founction(error){-->
<!--        error为变量，接收错误信息        -->
<!--                });-->
        <button @click="getData">点击获取数据vue-resource方式</button>
        <hr/>
        <br/>
        <ul>
            <li v-for="item in list" :key="item.key">
                {{item}}
            </li>
        </ul>
        <hr/>
        <hr/>
<!--        axios方式-->
<!--        axios使用方式：-->
<!--        1、安装 打开项目，在cmd中操作-->
<!--        cnpm install axios --save// 在GitHub里面搜-->
<!--        -->
<!--        2、哪里使用哪里引入 //注意是在js代码部分中引入     -->
<!--            import Axios from 'axios';-->
<!--                   此处的Axios为变量名，可以随意命名。-->


        <button @click="axiosGetdata">点击获取数据axios方式</button>
        <hr/>
        <br/>
        <ul>
            <li v-for="item in list" :key="item.key">
                {{item}}
            </li>
        </ul>



    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "getData",
        data(){
            return {
                // vue-resource方式  官方的插件
                list:[],
            }
        },
        methods:{
            // vue-resource方式  官方的插件
            getData(){
                let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.get(api).then(response => {
                    // window.console.log(response);
                    this.list=response.body.result;
                },function (err) {
                    window.console.log(err)
                })
            },
            // axios方式
            axiosGetdata(){
                let api2='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                Axios.get(api2).then((response)=>{
                    // window.console.log(response);
                    this.list=response.data.result;
                }).catch((err)=>{
                    window.console.log(err);
                });
            }
        }
    }
</script>

<style scoped>

</style>