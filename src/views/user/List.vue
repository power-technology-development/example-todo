<template>
  <div class="user-list">
    <v-col cols="12">
      <v-row justify="end">
        <v-col align="right" cols="12">
          <v-btn to="/user/add" min-width="100" color="primary">
            ADD
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="center" v-for="(user, index) in users" :key="user.name + index" :cols="$vuetify.breakpoint.mdAndUp ? '3' : '9'">
          <v-card tile>
            <v-img :src="user.src" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
              <v-card-title v-text="user.name"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" depressed small :to="`/todo/${user.id}`">
                VIEW
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class UserList extends Vue {
  users = [
    { id: '1', name: 'Alex', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
    { id: '2', name: 'Merlman', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
    { id: '3', name: 'Nani', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
    { id: '4', name: 'Champ Sung', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' }
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-list {
  background-color: hotpink;
}
</style>
