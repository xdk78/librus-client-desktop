<template>
    <v-app>
        <main>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <div v-if="!logged">
                        <login></login>
                    </div>
                    <div v-if="logged">
                        <mainlayout></mainlayout>
                    </div>
                </v-slide-y-transition>
            </v-container>
        </main>
        <v-footer fixed>
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        logged: this.$store.getters.logged
      }
    }
  }
</script>

<style lang="stylus">
    @import './stylus/main.styl'
</style>

