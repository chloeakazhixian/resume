import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

Vue.use(VScrollLock)
Vue.use(VueClipboard)


new AOS.init()

new Vue({
  render: (h) => h(App)
}).$mount('#app')
