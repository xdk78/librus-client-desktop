<template>
    <v-layout justify-center align-center row wrap>
        <v-flex xs12 sm8 md6>
            <v-subheader>Zaloguj się</v-subheader>
            <v-card class="grey lighten-4 elevation-0">
                <v-card-text>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs8>
                                <v-text-field
                                        name="login"
                                        label="Login"
                                        id="login"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-text>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs8>
                                <v-text-field
                                        name="password"
                                        label="Hasło"
                                        id="password"
                                        :append-icon="!hide_passoword ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (hide_passoword = !hide_passoword)"
                                        :type="hide_passoword ? 'password' : 'text'"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-btn primary>Zaloguj się</v-btn>
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
        hide_passoword: true
      }
    }
  }
</script>

<style scoped>
</style>
