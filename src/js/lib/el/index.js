/**
 * Created by Veket on 2017/9/21.
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index';

global.Vue = window.Vue = Vue;
global.Bus = window.Bus = new Vue();

export default {
  initElement(){
    Vue.use(ElementUI);
  }
}