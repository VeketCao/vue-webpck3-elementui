/**
 * Created by Veket on 2017/9/19.
 */
import CryptoJS from 'crypto-js';
let s=module.exports=global.AppUtil={};
s.SECRET_KEY = '111111';//密钥

//不可逆加密
s.encrypt=function(msg){//
    return  CryptoJS.HmacSHA256(msg.toString(),s.SECRET_KEY).toString(CryptoJS.enc.Hex);
};



