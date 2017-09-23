<template>
    <div class="lr_tool right">
        <a href="#/login" class="login">{{$t('home.login')}}</a>
        <a href="#/register" class="login">{{$t('home.register')}}</a>
    </div>
</template>
<style lang="scss" scoped>
    .lr_tool{
        height: 26px;
        margin-top: 14px;
        margin-right:35px;
        .login:first-child{
            width:40px;
        }
        .login:last-child{
            background: #2174ff;
            color: #fff;
        }
        a:hover{
            color: #2174ff;
        }
        .login{
            width: 48px;
            line-height: 24px;
            text-align: center;
            display: inline-block;
            border-radius: 3px;
            font-size: 12px;
            text-decoration: none;
        }
    }
</style>
<script>

</script>