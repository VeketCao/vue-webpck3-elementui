<template>
    <div class="app-footer">
        <p class="copyright">
            <span>CopyRight © 2013-2017 Coin18 All Rights Reserved. Powered by Coin18</span>
        </p>
        <p class="warn">
            <span>风险提示：数字货币可能存在矿工预挖、庄家操控、团队解散、技术缺陷等问题，其价格波动较大，因此我们强烈建议您在自身能承受的风险范围内参与数字货币交易</span>
        </p>
    </div>
</template>
<style lang="scss" scoped>
    .app-footer{
        width: 100%;
        height: auto;
        background: #252c34;
        padding: 20px 0;
        padding-bottom: 30px;
        .copyright{
            color: #fff;
            text-align: center;
            padding-top: 10px;
        }
        .warn{
            text-align: center;
            color: #fff;
            padding-top: 10px;
            max-width: 1200px;
            margin: 0px auto;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello m2',
            }
        }
    }
</script>