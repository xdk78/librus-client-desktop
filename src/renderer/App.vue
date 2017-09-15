<template>
    <v-app>
        <main>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <router-view></router-view>
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
      }
    }
  }
</script>

<style lang="stylus">
    @import './stylus/main.styl'
</style>

