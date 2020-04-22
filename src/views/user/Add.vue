<template>
  <div class="add-user">
    <v-col cols="12">
      <v-row justify="center">
        <v-col align="center">
          <v-col cols="12" sm="6" md="6">
            <v-text-field color="grey" label="ชื่อ" outlined></v-text-field>
            <v-text-field color="grey" label="นามสกุล" outlined></v-text-field>
            <v-text-field color="grey" label="ตำแหน่ง" outlined></v-text-field>
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field v-model="date" color="grey" outlined label="วันเกิด" readonly v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
            <v-btn min-width="100" color="primary">
              ADD
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AddUser extends Vue {
  user: any = {}
  date = new Date().toISOString().substr(0, 10)
  menu = false
  modal = false
  menu2 = false
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-list {
  background-color: hotpink;
}
</style>
