<template>
    <div class="header-bar-nav">
        <div class="logo">
            <h1>
                <a href="#/home">VCoin</a>
            </h1>
        </div>
        <ul class="nav" >
            <li><router-link to="/home" ><span>{{$t('home.menu1')}}</span></router-link></li>
            <li><router-link to="/trade" ><span>{{$t('home.menu2')}}</span></router-link></li>
            <li><router-link to="/finance" ><span>{{$t('home.menu3')}}</span></router-link></li>
            <li><router-link to="/security" ><span>{{$t('home.menu4')}}</span></router-link></li>
        </ul>
        <lang-tool></lang-tool>
        <lr-tool></lr-tool>
    </div>
</template>
<style lang="scss" scoped>
    .header-bar-nav{
        width: 100%;
        height: 50px;
        padding-left: 40px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        background: #fff;
        box-shadow: 1px 2px 6px rgba(0,0,0,.06);
        .logo{
            float: left;
            width: 150px;
            height: 28px;
            display: inline-block;
            margin-top:10px;
            h1{
                text-transform: uppercase;
                font-size: 1.5em;
            }
            a{
                text-decoration: none;
                color: #2174ff;
            }
        }
        .nav{
            float: left;
            .router-link-active span {
                color:#2174ff;
            }
            li{
                float: left;
                line-height: 50px;
                margin-left: 10px;
                a{
                    text-decoration: none;
                    font-size: 14px;
                }
                a:hover span{
                    color: #2174ff;
                }
                span{
                    color: #666;
                    cursor: pointer;
                    padding:10px 20px;
                    font-size: 14px;
                }
            }
        }
    }
</style>
<script>
    import LRTool from './LRTool/main.vue';
    import LangTool from './LangTool/main.vue';

    export default{
        data(){
            return{
                msg:'hello m2',
            }
        },
        components:{
            'lr-tool':LRTool,
            'lang-tool':LangTool
        }
    }
</script>