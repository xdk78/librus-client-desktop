<template>
    <v-layout justify-center align-center row wrap>
        <v-flex xs12 sm8 md6>
            <h3 class="text-xs-center">Zaloguj się</h3>
            <v-card class="grey lighten-4 elevation-1">
                <v-form v-model="valid" ref="form">
                <v-card-text>
                    <v-container>
                        <v-layout row>
                            <v-flex>
                                <v-text-field
                                        name="login"
                                        label="Login"
                                        id="login"
                                        v-on:keyup.enter="loginIn"
                                        v-model="login"
                                        :rules="passwordRules"
                                        required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex>
                                <v-text-field
                                        name="password"
                                        label="Hasło"
                                        id="password"
                                        v-on:keyup.enter="loginIn"
                                        v-model="password"
                                        :append-icon="!hide_password ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (hide_password = !hide_password)"
                                        :type="hide_password ? 'password' : 'text'"
                                        :rules="passwordRules"
                                        required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-btn v-on:click="loginIn" flat primary >Zaloguj się</v-btn>
                </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  /* eslint-disable indent */
  import axios from 'axios'
  let querystring = require('querystring')
  export default {
    name: 'login',
    data () {
      return {
        hide_password: true,
        login: '',
        loginRules: [
          (v) => !!v || 'Login jest wymagany'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Hasło jest wymagane'
        ],
        valid: false,
        loader: null,
        logged: this.$store.getters.logged
      }
    },
    methods: {
        loginIn (login, password) {
          if (this.valid === true) {
            axios.defaults.adapter = require('axios/lib/adapters/http')
            const api = axios.create({
              // https://api.librus.pl
              baseURL: 'https://api.librus.pl',
              headers: {
                'Authorization': 'Basic MzU6NjM2YWI0MThjY2JlODgyYjE5YTMzZjU3N2U5NGNiNGY=',
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              withCredentials: true
            })
            api.post('/OAuth/Token', querystring.stringify({
              username: this.login,
              password: this.password,
              grant_type: 'password',
              librus_long_term_token: '1',
              librus_rules_accepted: 'true',
              librus_mobile_rules_accepted: 'true'
            })).then((response) => {
              console.log(response)
              console.log(response.data)
              let data = response.data
              this.$store.dispatch('saveAccessToken', data.access_token)
              this.$store.dispatch('saveRefreshToken', data.refresh_token)
              this.$store.commit('setlogged', true)
            }).catch(error => {
              if (error.response) {
                // Response has been received from the server
                console.log(error.response.data) // => the response payload
              }
            })
          }
        }
    }
  }
</script>

<style scoped>
</style>
