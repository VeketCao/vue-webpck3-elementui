<template>
    <div class="app_login">
        <div class="header">
            <span>登录</span>
        </div>
        <form class="login_form">
            <div class="item_box">
                <label class="item_l">账号:</label>
                <input class="item_i" type="text"  placeholder="请输入账号">
            </div>
            <div class="item_box">
                <label class="item_l">登录密码:</label>
                <input class="item_i" type="password"  placeholder="请输入登录密码">
            </div>
            <div class="item_box">
                <button class="item_btn" >登录</button>
            </div>
        </form>

    </div>
</template>
<style lang="scss" scoped>
    .app_login{
        width: 852px;
        margin: 100px auto;
        background: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,.07);
        overflow: hidden;
        border-radius: 3px;
        .header{
            font-size: 24px;
            text-align: center;
            color: #252c34;
            padding-top: 50px;
            padding-bottom: 40px;
        }
        .item_box{
            margin-left: 100px;
            padding-bottom: 41px;
            overflow: hidden;
            .item_l{
                float: left;
                width: 190px;
                height: 40px;
                font-size: 14px;
                line-height: 40px;
                text-align: right;
                padding-right: 8px;
                box-sizing: border-box;
            }
            .item_i{
                width: 288px;
                display: block;
                height: 40px;
                font-size: 14px;
                border: solid 1px #d5d5d5;
                border-radius: 3px;
                text-indent: 12px;
                float: left;
                color: #a0a0ab;
                background: #FFF;
            }
            .item_btn{
                text-indent: 0;
                background: #2174ff;
                text-align: center;
                color: #fff;
                cursor: pointer;
                width: 288px;
                display: block;
                height: 40px;
                font-size: 14px;
                border-radius: 3px;
                float: left;
                margin-left: 190px;
                border: solid 1px #2174ff;
            }
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