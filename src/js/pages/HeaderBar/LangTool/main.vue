<template>
    <div class="lang_box right">
        <el-dropdown @command="handleCommand">
            <span><i class="lang_i"></i>{{msg}}</span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh-cn"><span class="lg_sp">中文简体</span></el-dropdown-item>
                <el-dropdown-item command="en"><span class="lg_sp">ENGLISH</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<style lang="scss" scoped>
    .lang_box{
        width: 60px;
        margin-top: 17px;
        margin-right: 60px;
        .lang_i{
            position: absolute;
            top:1px;
            left: -20px;
            width: 18px;
            height: 18px;
            background: url(../../../../img/lang.png) no-repeat center center;
            background-size: cover;
        }
        .lg_sp{
            font-size: 12px;
        }
    }
</style>
<script>
    import CFG from '../../../config/main.js';

    export default {
        data() {
            return {
                msg: '中文简体',
            }
        },
        created() {
            this.msg = CFG.langs[Vue.config.lang];
        },
        methods:{
            handleCommand(command) {
                localStorage.setItem(CFG.LANG,command);
                location.reload();
            }
        }
    }
</script>