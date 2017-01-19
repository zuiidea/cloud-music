import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
import AppStyles from './css/app.less'
import Routes from './routes.js'
import App from './app'

Vue.use(Framework7Vue)

new Vue({
  el: '#app',
  template: '<app/>',
  framework7: {
    root: '#app',
    material: true,
    routes: Routes
  },
  components: {
    app: App
  }
})
