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
                                        :rules="loginRules"
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
                    <v-btn @click.native="loginIn" flat primary to="/mainlayout">Zaloguj się</v-btn>
                </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  /* eslint-disable indent */
  import api from '../api'
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
            api.loginIn(this.login, this.password)
          }
        }
    }
  }
</script>

<style scoped>
</style>
