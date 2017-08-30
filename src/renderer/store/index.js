import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [createPersistedState({
    key: 'librus-client-desktop'
  })],
  strict: process.env.NODE_ENV !== 'production'
})
