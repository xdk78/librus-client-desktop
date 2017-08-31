import axios from 'axios'
const api = axios.create({
  baseURL: 'https://api.librus.pl',
  headers: {
    'Authorization': 'Basic MzU6NjM2YWI0MThjY2JlODgyYjE5YTMzZjU3N2U5NGNiNGY='
  },
  withCredentials: true
})

const state = {
  logged: false,
  token: ''
}

const mutations = {
  setlogged (state, logged) {
    state.logged = logged
  },
  loginIn (state, credentials) {
    // const BASE_URL = 'https://api.librus.pl'
    // 13335
    // librus11
    // konto demo
    // FIXME
    api.post('/OAuth/Token', {
      username: credentials.login,
      password: credentials.password,
      grant_type: 'password',
      librus_long_term_token: '1'
    }).then((response) => {
      console.log(response)
      state.logged = true
      state.token = response.token
    }).catch((err) => {
      state.logged = false
      console.log(err)
    })
  }
}

const getters = {
  logged: state => state.logged
}

const actions = {
  loginIn ({ commit }, credentials) {
    commit('loginIn', credentials)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
