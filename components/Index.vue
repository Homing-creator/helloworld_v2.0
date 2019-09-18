<template>
    <div>
        <v-myHeader :titleb="title" :run="run" :index="this" ref="Header"></v-myHeader>
        <h2>这是一个首页</h2>
        <hr/>
        <button @click="getChildData">点击获取子组件数据</button>
    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Index",
        components:{
            'v-myHeader':Header,
        },
        data() {
            return {
                title:'首页title',
            }
        },
        methods:{
            run(){
                // alert(`我是home的title--${data}`);
                // alert("我是home的title--"+data+`1${data}`);
                alert(`我是父组件的run方法`);
            },
            getChildData(){

                alert(`我是子组件的msg--${this.$refs.Header.msg}`);
                this.$refs.Header.runb();
            }
        },

    }
</script>

<style scoped>

</style>