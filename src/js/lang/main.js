/**
 * Created by Veket on 2017/9/22.
 */
import VueI18n from 'vue-i18n';

/**element-ui自带语言**/
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
/**自定义语言**/
import cn from './cn';
import en from './en';

import CFG from '../config/main.js';

export default {
    initLang(){
        Vue.use(VueI18n);

        Vue.locale('zh-cn',Object.assign({},zhLocale,cn));
        Vue.locale('en',Object.assign({},enLocale,en));

        //设置环境语言
        Vue.config.lang = localStorage.getItem(CFG.LANG) ||'zh-cn';
        localStorage.setItem(CFG.LANG,Vue.config.lang);
    }
}