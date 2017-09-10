<template>
    <v-container fluid style="min-height: 0;" grid-list-lg>
        <v-layout justify-center align-center row wrap v-for="(days, key, index) in timetables">
            <v-flex xs12 sm8>
                <h6 class="primary--text text-sm-center">{{date[index]}}</h6>
            </v-flex>
            <v-flex xs12 sm8 v-for="oneday in days">
                <v-card>
                    <v-card-title primary-title v-for="da in oneday">
                        <div>
                            <h3 class="headline mb-0"> {{da.LessonNo}}</h3>
                            <div>{{da.Subject.Name}}</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
            </div>
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
        date: []
      }
    },
    mounted () {
      api.request('/Timetables').then((data) => {
        console.log(data)
        this.timetables = data.Timetable
        let object = data.Timetable
      for (let key in object) {
        if (object.hasOwnProperty(key)) {
          console.log(key)
          this.date.push(key)
        }
      }
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
