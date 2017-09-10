<template>
    <v-container fluid style="min-height: 0;" grid-list-lg>
        <div>
            <h3 class="text-sm-center">{{date}}</h3>
        </div>
        <v-layout justify-center align-center row wrap>
            <v-flex xs12 sm8 v-for="days in timetables">
                <v-card>
                    <v-card-title primary-title v-for="day in days">
                        <div>
                            <h3 class="headline mb-0">{{day.LessonNo}}</h3>
                            <div>{{day.Subject.Name}}</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  /* eslint-disable indent */
  import api from '../api'
  // import _ from 'lodash'
  export default {
    name: 'timetable',
    data () {
      return {
        timetables: Object,
        date: '2017-09-07'
      }
    },
    mounted () {
      api.request('/Timetables').then((data) => {
        console.log(data)
        this.timetables = data.Timetable[this.date]
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
