<template>
    <div id="content">
        <h2>{{list.title}}</h2>
        <div v-html="list.content"></div>
    </div>
</template>

<script>
    export default {
        name: "News",
        data(){
            return {
                list:[],
            }
        },
        mounted() {
            var aid=this.$route.params.aid;
            this.requestData(aid);

        },
        methods:{
            requestData(aid){
                let api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
                this.$http.get(api).then((res) =>{
                    // window.console.log(res);

                    this.list=res.body.result[0];
                    // window.console.log(this.list);

                },(err) =>{
                    window.console.log(err);
                });
            }
        },


    }
</script>

<style scoped>
    #content{
        line-height: 2rem;
    }
    #content img{
        max-width: 10%;
        width: 100%;
    }
</style>