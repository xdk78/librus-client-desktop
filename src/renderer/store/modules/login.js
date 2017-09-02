const state = {
  logged: false,
  accessToken: '',
  refreshToken: ''
}

const mutations = {
  setlogged (state, logged) {
    state.logged = logged
  },
  saveTokens (state, accessToken, refreshToken) {
    state.accessToken = accessToken
    state.refreshToken = refreshToken
  }
}

const getters = {
  logged: state => state.logged,
  accessToken: state => state.accessToken,
  refreshToken: state => state.refreshToken
}

const actions = {
  saveTokens ({ commit }, accessToken, refreshToken) {
    commit('saveTokens', accessToken, refreshToken)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
