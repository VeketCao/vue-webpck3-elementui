/**
 * Created by Veket on 2017/9/19.
 */
import '../../css/base';
import App from '../pages/App/main.vue';
import router from '../pages/Route/main.js';
import El from '../lib/el/index.js';
import Lang from '../lang/main.js';

El.initElement();//初始化ElementUI
Lang.initLang();//初始化语言

new Vue({
    router:router,
    render: h => h(App),
}).$mount('#app');

if (__PROD__) {
    Vue.config.devtools = false;
    console.log('[正式环境]');
} else {
    Vue.config.devtools = true;
    console.log('[开发环境]');
}