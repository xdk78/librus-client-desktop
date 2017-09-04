import axios from 'axios'
import store from './../store'
let querystring = require('querystring')

axios.defaults.adapter = require('axios/lib/adapters/http')
const api = axios.create({
  // https://api.librus.pl
  headers: {
    'Authorization': 'Basic MzU6NjM2YWI0MThjY2JlODgyYjE5YTMzZjU3N2U5NGNiNGY=',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true
})

const loginIn = (login, password) => {
  api.post('https://api.librus.pl/OAuth/Token', querystring.stringify({
    username: login,
    password: password,
    grant_type: 'password',
    librus_long_term_token: '1',
    librus_rules_accepted: 'true',
    librus_mobile_rules_accepted: 'true'
  })).then((response) => {
    console.log(response)
    console.log(response.data)
    let data = response.data
    store.dispatch('saveAccessToken', data.access_token)
    store.dispatch('saveRefreshToken', data.refresh_token)
    store.commit('setlogged', true)
  }).catch(error => {
    if (error.response) {
      console.log(error.response.data)
    }
  })
}

const request = (endpoint) => {
  return new Promise((resolve, reject) => {
    api.get('https://api.librus.pl/2.0' + endpoint, {
      headers: {
        'Authorization': 'Bearer ' + store.getters.accessToken
      }})
      .then((response) => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
        if (error.response) {
          reject(error.response)
          console.log(error.response.data)
        }
      })
  })
}

export default {
  loginIn,
  request
}
