<template>
    <div class="app_register">
        <div class="header">
            <span>注册</span>
        </div>
        <form class="register_form">
            <div class="item_box">
                <label class="item_l">邮箱注册:</label>
                <input class="item_i" type="text" :class="{'valid_error':valid.email.v}" placeholder="输入注册邮箱" v-model="user.EMAIL" @blur="emailValid">
                <span class="display_none" :class="{'v_info':valid.email.v}">{{valid.email.i}}</span>
            </div>
            <div class="item_box">
                <label class="item_l">登录密码:</label>
                <input class="item_i" type="password" :class="{'valid_error':valid.pw.v}" placeholder="输入登录密码" v-model="user.USER_PASSWORD" @blur="pwValid">
                <span class="display_none" :class="{'v_info':valid.pw.v}">{{valid.pw.i}}</span>
            </div>
            <div class="item_box">
                <label class="item_l">交易密码:</label>
                <input class="item_i" type="password" :class="{'valid_error':valid.pw.v}" placeholder="输入6位交易密码" v-model="user.USER_TRADE_PASSWORD" @blur="tpwValid">
                <span class="display_none" :class="{'v_info':valid.tpw.v}">{{valid.tpw.i}}</span>
            </div>
            <div class="item_box">
                <input class="item_y_i" type="text" placeholder="输入验证码" :class="{'valid_error':valid.yzm.v}"  v-model="user.YZM" @blur="yzmValid">
                <a class="item_y_a" :class="{'disable_yzm':send_yzm.is_send}" @click="sendYzm">{{send_yzm.msg}}</a>
                <span class="display_none" :class="{'v_info':valid.yzm.v}">{{valid.yzm.i}}</span>
            </div>
            <div class="item_box">
                <button class="item_btn" :class="{'disable_btn':isR}" :disabled="isR" @click="registerHandle" >注册</button>
            </div>
        </form>
    </div>
</template>
<script>
    import API from '../../api/main.js';

    export default{
        data(){
            return{
                msg:'hello m2',
                isR:false,
                user:{
                    'EMAIL':'',
                    'USER_PASSWORD':'',
                    'USER_TRADE_PASSWORD':'',
                    'YZM':''
                },
                valid:{
                    email:{
                        v:false,
                        i:'邮箱不能为空'
                    },
                    pw:{
                        v:false,
                        i:'密码不能为空'
                    },
                    tpw:{
                        v:false,
                        i:'交易密码不能为空'
                    },
                    yzm:{
                        v:false,
                        i:'验证码不能为空'
                    }
                },
                send_yzm:{
                    v:'111111',
                    msg:'发送验证码到我的邮箱',
                    is_send:false,
                    wait:60
                }
            }
        },
        methods:{
            emailValid(){
                if(_.isEmpty(this.user.EMAIL)) {
                    this.valid.email.v = true;
                    this.valid.email.i = '邮箱不能为空！';
                }else{
                    let isEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(this.user.EMAIL);
                    if(!isEmail){
                        this.valid.email.v = true;
                        this.valid.email.i = '邮箱格式不正确！';
                    }else{
                        this.valid.email.v = false;
                    }
                }


            },
            pwValid(){
                if(_.isEmpty(this.user.USER_PASSWORD)) {
                    this.valid.pw.v = true;
                    this.valid.pw.i = '密码不能为空！';
                }else{
                    let lg = this.user.USER_PASSWORD.length;
                    if(lg<6||lg>13){
                        this.valid.pw.v = true;
                        this.valid.pw.i = '请输入6-13位字符！';
                    }else{
                        this.valid.pw.v = false;
                    }

                }
            },
            tpwValid(){
                if(_.isEmpty(this.user.USER_TRADE_PASSWORD)) {
                    this.valid.tpw.v = true;
                    this.valid.tpw.i = '交易密码不能为空！';
                }else{
                    let lg = this.user.USER_TRADE_PASSWORD.length;
                    if(lg != 6){
                        this.valid.tpw.v = true;
                        this.valid.tpw.i = '请输入6位个字符！';
                    }else{
                        this.valid.tpw.v = false;
                    }
                }
            },
            yzmValid(){
                if(_.isEmpty(this.user.YZM)) {
                    this.valid.yzm.v = true;
                    this.valid.yzm.i = '验证码不能为空！';
                }else{
                    if(AppUtil.encrypt(this.user.YZM) != this.send_yzm.v){
                        this.valid.yzm.v = true;
                        this.valid.yzm.i = '验证码不正确！';
                    }else{
                        this.valid.yzm.v = false;
                    }
                }
            },
            isAllPass(){
                return (!this.valid.email.v)&&(!this.valid.pw.v)&&(!this.valid.tpw.v)&&(!this.valid.yzm.v);
            },
            registerHandle(){
                this.emailValid();
                this.pwValid();
                this.tpwValid();
                this.yzmValid();
                if(this.isAllPass()){
                    console.log(this.user);
                    this.isR  = true;
                }
            },
            timer(){
                if(this.send_yzm.wait==0){
                    this.send_yzm.is_send = false;
                    this.send_yzm.msg='发送验证码到我的邮箱';
                    this.send_yzm.wait=120;
                }else{
                    this.send_yzm.msg = '验证码已发送,'+this.send_yzm.wait+'秒后可重发!';
                    this.send_yzm.wait = this.send_yzm.wait-1;
                    let that = this;
                    setTimeout(function() {that.timer()},1000);
                }
            },
            sendYzm(){
                //先判断是否填写了邮箱地址
                this.emailValid();
                if(this.valid.email.v) return;

                if(this.send_yzm.is_send) true;
                this.timer();
                this.send_yzm.is_send = true;
                let that = this;

                API.sendEmailYzm({data:this.user.EMAIL}).then((res)=>{
                    that.send_yzm.v = res.code;
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .app_register{
        width: 852px;
        margin: 100px auto;
        background: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,.07);
        border-radius: 3px;
        .header{
            font-size: 24px;
            text-align: center;
            color: #252c34;
            padding: 35px 0;
            padding-top: 40px;
        }
        .item_box{
            margin-left: 100px;
            padding-bottom: 25px;
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
            }
            .item_y_i{
                float: left;
                display: block;
                height: 40px;
                border: solid 1px #d5d5d5;
                border-radius: 3px;
                text-indent: 12px;
                width: 120px;
                margin-left: 190px;
            }
            .item_y_a{
                float: left;
                padding: 10px 10px;
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
