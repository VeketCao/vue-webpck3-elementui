<template>
    <div class="beauty-scroll-bar" id="app-main">
        <header-bar></header-bar>
        <div class="app_container">
            <router-view></router-view>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<style lang="scss">
    body {
        margin: 0px;
        padding: 0px;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        min-width:1200px;
        height:100%;
        width: 100%;
    }
    #app-main {
        margin: 0 auto;
        padding:0;
        height:100%;
        width: 100%;
    }
    .app_container{
        width: 100%;
        min-height: 570px;
    }
</style>
<script>
    import HeaderBar from '../HeaderBar/main.vue';
    import FooterBar from '../FooterBar/main.vue';
    export default{
        data(){
            return{
                msg:'hello vue',
            }
        },
        components:{
            'header-bar':HeaderBar,
            'footer-bar':FooterBar
        }
    }
</script>
