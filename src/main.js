import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
// import Mui from './lib/mui/css/mui.css'
Vue.use(MintUI)
const vm = new Vue({
   el: '#app',

})