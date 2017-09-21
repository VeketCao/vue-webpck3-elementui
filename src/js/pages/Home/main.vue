<template>
    <div class="home-page">
        <div>
            <el-carousel :interval="5000" arrow="always" height="300px">
                <el-carousel-item :key="index" v-for="(item,index) in ads">
                    <img :src="item" style="width:100%;height:100%;"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="item_box w1200">
            <div class="con_box">
                <div class="left">
                    <div class="s1">以xrp为主币的币币交易</div>
                    <div class="s2">
                        COINE18 以xrp为主币，用于买卖其他数字货币
                        <br>
                        提供各类全面的优质数字货币交易
                    </div>
                </div>
                <img :src="require('../../../img/plat2.png')" class="right">
            </div>
        </div>
        <div class="item_box w1200">
            <div class="con_box">
                <img :src="require('../../../img/plat1.png')" class="left">
                <div class="right">
                    <div class="s1">服务全球用户</div>
                    <div class="s2">
                        COINE18服务于全球用户，持续的引进各种优秀
                        <br>
                        数字货币,为用户提供全球范围内的交易服务
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .home-page{
        margin-top: 50px;
        background: #fff;
        min-height: 660px;
        .item_box{
            height: 300px;
            box-sizing: border-box;
            border-bottom: solid 1px #eee;
            .con_box{
                width:1000px;
                margin: 0 auto;
                .s1{
                    margin-top: 100px;
                    font-size: 24px;
                    line-height: 30px;
                    font-weight: 300;
                    color: #0c1e38;
                }
                .s2{
                    color: #aaa;
                    margin-top: 40px;
                    font-size: 14px;
                    line-height: 24px;
                }
            }
            img{
                margin-top: 40px;
                height: 220px;
            }
        }
    }
</style>
<script>

    export default{
        data(){
            return{
                msg:'hello m2',
                ads:[
                    require('../../../img/ad1.jpg'),
                    require('../../../img/ad2.jpg'),
                ]
            }
        }
    }
</script>