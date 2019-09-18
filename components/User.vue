<template>
    <div id="user">
        <div class="user">
            <div class="left">
                <ul>
                    <li><router-link to="/user/useradd">增加用户</router-link></li>
                    <li><router-link to="/user/userlist">用户列表</router-link></li>
                </ul>
            </div>
            <div class="right">
                内容区域
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{

            }
        },
    }
</script>

<style scoped lang="scss">
    .user{
        display: flex;
        .left{
            width: 200px;
            min-height: 1080px;
            border-right: 1px solid #eee;
            li{
                line-height: 2;
            }
        }
        .right{
            flex:1;
        }
    }
</style>