<template>
    <div class="test_bg">
        <span>{{msg}}</span>
    </div>
</template>
<style lang="scss" scoped>
    .test_bg{
        background: rosybrown;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello world!!!!',
            }
        }
    }
</script>