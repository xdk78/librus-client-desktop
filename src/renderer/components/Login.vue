<template>
    <v-layout justify-center align-center row wrap>
        <v-flex xs12 sm8 md6>
            <v-subheader>Zaloguj się</v-subheader>
            <v-card class="grey lighten-4 elevation-1">
                <v-card-text>
                    <v-container fluid>
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
                    </v-container>
                </v-card-text>
                <v-card-text>
                    <v-container fluid>
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
                <v-container fluid>
                    <v-btn v-on:click="loginIn" primary>Zaloguj się</v-btn>
                </v-container>
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
        password: ''
      }
    },
        methods: {
        loginIn () {
          this.$store.dispatch('loginIn', {
            login: this.login,
            password: this.password}
          )
        }
      }
  }
</script>

<style scoped>
</style>
