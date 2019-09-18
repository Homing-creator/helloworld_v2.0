<template>
    <div>
        <p>我是新闻组件</p>
        <button @click="emitHomeData">获取home组件数据</button>
        <hr/>
        <ul class="newslist">
            <li v-for="(item,key) in newsList" :key="key">
                <router-link :to="'/News/'+item.aid">{{item.title}}</router-link>
            </li>
        </ul>
        <hr/>
        <ul>
            <li v-for="(item,key) in goodsList" :key="key">
                <router-link to="/Goods?aid=123">{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import VueEvent from "../model/vueEvent";
    export default {
        name: "BrotherB",
        components:{

        },
        data(){
            return{
                title:'home title',
                newsList:[],
                goodsList:['商品111','商品222','商品333','商品444'],
            }
        },
        methods:{
            emitHomeData(){
              VueEvent.$emit('to-homedata',this.title);
            },
            getNewsdata(){
                let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.get(api).then(response => {
                    // window.console.log(response);
                    this.newsList=response.body.result;
                },function (err) {
                    window.console.log(err)
                })
            }
        },
        mounted() {
          VueEvent.$on('to-news',function (data) {
              alert(data);
          });
          this.getNewsdata();
              // window.console.log(this.to-news);
        },
    }
</script>

<style scoped >
    .newslist>li{
        height: 3.4rem;
        line-height: 3.4rem;
        border-bottom: 1px solid #eee;
        font-size: 1.2rem;
        overflow: hidden;
    }
    .newslist a{
        color: blue;
        padding: 0 1rem;
    }
</style>