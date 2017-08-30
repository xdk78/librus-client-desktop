const state = {
  logged: false
}

const mutations = {
  setlogged (state, logged) {
    state.logged = logged
  }
}

const getters = {
  logged: state => state.logged
}

export default {
  state,
  mutations,
  getters
}
