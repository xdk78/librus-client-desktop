<template>
    <v-layout justify-center align-center row wrap>
        <v-flex xs12 sm8 md6>
            <ul v-for="day in timetables.Timetable">
              <li>{{day}}</li>
              </ul>
        </v-flex>
    </v-layout>
</template>

<script>
  /* eslint-disable indent */
  import api from '../api'
  export default {
    name: 'timetable',
    data () {
      return {
        timetables: []
      }
    },
    mounted () {
      api.request('/Timetables').then((data) => {
        console.log(data)
        this.timetables = data
        }).catch((error) => {
          console.log(error)
          })
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
