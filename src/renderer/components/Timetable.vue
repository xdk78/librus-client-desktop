<template>
    <v-container fluid grid-list-xs>
        <v-layout justify-center align-center row wrap v-for="(days, key, index) in timetables">
            <v-flex xs12 sm8>
                <h6 class="primary--text text-sm-center">{{date[index] | moment}}</h6>
            </v-flex>
            <v-flex xs12 sm8 v-for="oneday in days">
                <v-card v-for="da in oneday">
                    <v-card-title primary-title >
                    <v-list-tile-avatar>
                        <h3 class="headline mb-0"> {{da.LessonNo}}</h3>
                    </v-list-tile-avatar>
                        <div>
                            <div>{{da.Subject.Name}}</div>
                            <div class="secondary--text">{{da.Teacher.FirstName}} {{da.Teacher.LastName}}</div>
                            <div class="accent--text">{{da.HourFrom}} - {{da.HourTo}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon @click.native="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                        <v-card-text v-show="show">
                            <div>Dodatkowe informacje:</div>
                            <div>{{da.VirtualClassName}}</div>
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  /* eslint-disable indent */
  import api from '../api'
  import moment from 'moment'
  export default {
    name: 'timetable',
    data () {
      return {
        timetables: Object,
        date: [],
        show: false
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
    },
    filters: {
      moment: function (date) {
        moment.locale('pl')
        return moment(date).format('dddd DD.MM')
      }
    }
  }
</script>

<style scoped>
</style>
