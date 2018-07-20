import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';
Vue.use(ElementUI)
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
new Vue({
  el: '#app',
  render: h => h(App)
})
