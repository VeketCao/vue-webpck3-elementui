<template>
    <div class="home-page">
        <div>
            <el-carousel :interval="5000" arrow="always" height="300px">
                <el-carousel-item :key="index" v-for="(item,index) in ads">
                    <img :src="item" style="width:100%;height:100%;"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="item w1200">
            <div class="left">
                <h1>aaaaa</h1>
                <span>
                    bbb
                </span>
            </div>
            <img :src="require('../../../img/plat3.png')" class="right">
        </div>
    </div>
</template>
<style scoped>
    .home-page{
        margin-top: 50px;
        background: #fff;
        min-height: 660px;
        .item{
            height: 300px;
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