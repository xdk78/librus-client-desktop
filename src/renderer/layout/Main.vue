<template>
    <v-app>
        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer">
            <v-list>
                <v-list-tile
                        :to="item.to"
                        :key="i"
                        v-for="(item, i) in items">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <main>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <router-view></router-view>
                </v-slide-y-transition>
            </v-container>
        </main>
        <v-footer :fixed="fixed">
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
  export default {
    name: 'mainlayout',
    data () {
      return {
        logged: this.$store.getters.logged,
        clipped: true,
        drawer: true,
        fixed: true,
        miniVariant: false,
        items: [
          {icon: 'list', title: 'Plan lekcji', to: '/'},
          {icon: 'grade', title: 'Oceny', to: '/grades'}
        ],
        title: 'Dziennik'
      }
    },
    created () {
      if (!this.logged) {
        this.$router.push('/login')
      }
      if (this.logged) {
        this.$router.push('/')
      }
    }
  }
</script>

