import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import './assets/css/custom.css'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false
Vue.use(VueTypedJs)

new Vue({
  vuetify,
  render: h => h(App),
  data: () => ({
    notif: {
      text: '',
      active: false
    }
  })
}).$mount('#app')
