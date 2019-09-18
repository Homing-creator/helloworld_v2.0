<template>
  <div id="app">
    <header class="header">
        <ul>
            <li><router-link to="/BrotherA">首页</router-link></li>
            <li><router-link to="/BrotherB">新闻</router-link></li>
            <li><router-link to="/User">用户</router-link></li>
            <li><router-link to="/pcUi">pc端</router-link></li>
        </ul>
    </header>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">

    .header{
        background-color: lightskyblue;

        text-align: center;

        li{
            color: white;
            font-size: 1.4rem;
            display: inline;
            padding: 1rem 20px;
        }
    }
</style>
