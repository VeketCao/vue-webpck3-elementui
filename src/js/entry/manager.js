/**
 * Created by Veket on 2017/9/19.
 */
import '../../css/base';
import HelloWorld from '../components/HelloWorld/main.vue';

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    template:'<hello-world></hello-world>',
    components:{
        'hello-world':HelloWorld,
    }
});


if (__PROD__) {
    Vue.config.devtools = false;
} else {
    Vue.config.devtools = true;
}