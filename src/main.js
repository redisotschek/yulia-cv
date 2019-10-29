import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    fonts () {
      return this.$vuetify.breakpoint.mdAndUp 
    ? 
    {
      title: 'display-4',
      subtitle: 'subtitle-1',
      regular: 'headline',
    }
    :
    {
      title: 'display-3',
      subtitle: 'subtitle-1',
      regular: 'title',
    }
    }
  }
})

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
