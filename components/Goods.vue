<template>
    <div>我是一个商品</div>
</template>

<script>
    export default {
        name: "Goods",
        mounted() {
            //获取get传值
            window.console.log(this.$route.query);
        }
    }
</script>

<style scoped>

</style>