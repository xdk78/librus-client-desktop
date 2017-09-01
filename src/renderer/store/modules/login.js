import axios from 'axios'
let querystring = require('querystring')

axios.defaults.adapter = require('axios/lib/adapters/http')
const api = axios.create({
  baseURL: 'https://api.librus.pl',
  headers: {
    'Authorization': 'Basic MzU6NjM2YWI0MThjY2JlODgyYjE5YTMzZjU3N2U5NGNiNGY=',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true
})

const state = {
  logged: false,
  accessToken: '',
  refreshToken: ''
}

const mutations = {
  setlogged (state, logged) {
    state.logged = logged
  },
  loginIn (state, credentials) {
    api.post('/OAuth/Token', querystring.stringify({
      username: credentials.login,
      password: credentials.password,
      grant_type: 'password',
      librus_long_term_token: '1',
      librus_rules_accepted: 'true',
      librus_mobile_rules_accepted: 'true'
    })).then((response) => {
      console.log(response)
      console.log(response.data)
    }).catch(error => {
      if (error.response) {
        // Response has been received from the server
        console.log(error.response.data) // => the response payload
      }
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
