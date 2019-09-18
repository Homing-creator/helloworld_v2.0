<template>
    <div>
        <p>我是home组件</p>
        <br/>
        <button @click="emitNews">给news组件广播数据</button>
        <hr/>
        <button @click="goNews">通过js跳转到新闻页面</button>
        <hr/>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <hr/>
        <mt-index-list>
            <mt-index-section index="A">
                <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="C">
                <mt-cell title="Caldwin"></mt-cell>
                <mt-cell title="Craden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="D">
                <mt-cell title="Daldwin"></mt-cell>
                <mt-cell title="Draden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="E">
                <mt-cell title="Ealdwin"></mt-cell>
                <mt-cell title="Eraden"></mt-cell>
            </mt-index-section>

            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
        </mt-index-list>
        <hr/>
        <v-actionsheet></v-actionsheet>
    </div>
</template>

<script>
    import VueEvent from '../model/vueEvent'
    import ActionSheet from './action-sheet'
    export default {
        name: "BrotherA",
        components:{
            'v-actionsheet':ActionSheet,
        },
        data(){
            return{
                msg:'我是一个新闻组件',
            }
        },
        methods:{
            emitNews(){
                VueEvent.$emit('to-news',this.msg);//(自定义变量名，传递的变量)
            },
            goNews(){
                // this.$router.push({ path: 'BrotherB'});
                // this.$router.push({ path: 'News/495'});
                this.$router.push({ name:'brotherb'});
            },
        },
        mounted() {
            VueEvent.$on('to-homedata',data=>{
                alert(data);
            })
        }
    }
</script>

<style scoped>

</style>