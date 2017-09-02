const state = {
  logged: false,
  accessToken: '',
  refreshToken: ''
}

const mutations = {
  setlogged (state, logged) {
    state.logged = logged
  },
  saveAccessToken (state, accessToken) {
    state.accessToken = accessToken
  },
  saveRefreshToken (state, refreshToken) {
    state.refreshToken = refreshToken
  }
}

const getters = {
  logged: state => state.logged,
  accessToken: state => state.accessToken,
  refreshToken: state => state.refreshToken
}

const actions = {
  saveAccessToken ({ commit }, accessToken) {
    commit('saveAccessToken', accessToken)
  },
  saveRefreshToken ({ commit }, refreshToken) {
    commit('saveRefreshToken', refreshToken)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
