<template>
    <v-layout justify-center align-center row wrap>
        <v-flex xs12 sm8 md6>
            <h3 class="text-xs-center">Zaloguj się</h3>
            <v-card class="grey lighten-4 elevation-1">
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
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        :loading="loading"
                        v-on:click="loginIn"
                        :disabled="loading"
                        flat primary>
                        Zaloguj się
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  /* eslint-disable indent */
  export default {
    name: 'login',
    data () {
      return {
        hide_password: true,
        login: '',
        password: '',
        loader: null,
        loading: false
      }
    },
    methods: {
      loginIn () {
        this.loader = 'loading'
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => this.$store.dispatch('loginIn', {
          login: this.login,
          password: this.password
        }).then(() => {
          this[l] = false
          this.loader = null
        }), 10)
      }
    }
  }
</script>

<style scoped>
</style>
