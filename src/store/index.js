import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import email from './modules/email'

Vue.use(Vuex)


export default new Vuex.Store({
      modules:{
          user,
          email
      }
})