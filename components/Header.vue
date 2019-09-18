<template>
    <div>
        <h2>我是头部组件--{{titleb}}</h2>
        <hr/>
        <button @click="run">执行父组件的方法 </button>
        <hr/>
        <button @click="getIndexdata">获取父组件的数据和方法</button>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return{
                msg:'子组件msg',
            }
        },
        methods:{
            getIndexdata(){
                // alert(this.index.title);
                this.$parent.getChildData();
            },
            runb(){
                alert('我是子组件的runb方法');
            }
        },
        props:['titleb','run','index'],


    }
</script>

<style scoped>

</style>