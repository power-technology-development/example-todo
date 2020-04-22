<template>
  <div class="todo">
    <v-col cols="12">
      <v-btn to="/user/list" small min-width="100" color="primary">
        <v-icon>
          {{ mdiArrowLeft }}
        </v-icon>
        User List
      </v-btn>
      <v-row class="pt-4">
        <v-col class="mb-2" :cols="$vuetify.breakpoint.lgAndUp ? '3' : '12'">
          <div class="white px-2 py-2">
            <p class="text-center subtitle-1 font-weight-bold">Add new slot</p>
            <v-text-field label="Slot Name" color="primary" v-model="slotName" outlined dense></v-text-field>
            <v-row justify="center" class="mx-auto pt-0 mb-7">
              <v-btn @click="callAddSlot({ userId: $route.params.userId, slotName })" min-width="80" depressed small color="info lighten-1"
                >ADD</v-btn
              >
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-row v-if="todo">
        <v-col v-for="(slot, headerIndex) in todo.slots" :key="slot.id + headerIndex" :cols="$vuetify.breakpoint.lgAndUp ? '3' : '12'">
          <div class="white px-2 py-2 slot-border">
            <p class="text-center subtitle-1 font-weight-bold">{{ slot.name }}</p>
            <v-text-field label="Title" @input="text => setTask(slot.id, text, 'title')" color="primary" outlined dense></v-text-field>
            <v-textarea label="Description" @input="text => setTask(slot.id, text, 'description')" color="primary" outlined height="80"></v-textarea>
            <v-row justify="center" class="mx-auto pt-0 mb-7">
              <v-btn min-width="80" @click="addTask({ to: slot.id, userId: todo.userId, task: task[slot.id] })" depressed small color="info lighten-1"
                >ok</v-btn
              >
            </v-row>
            <v-card v-for="(task, taskIndex) in todo.tasks[slot.id]" :key="task.timeStamp + taskIndex" class="mx-auto mt-4" tile>
              <v-card-subtitle class="pb-0 subtitle-1 font-weight-bold">{{ task.title }}</v-card-subtitle>
              <v-card-text class="pb-0">
                {{ task.description }}
              </v-card-text>
              <v-card-text class="pb-0"> DATE: {{ new Date(task.timeStamp).toLocaleDateString() }} </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-speed-dial v-model="fab[slot.id + task.id]" bottom right direction="bottom" transition="slide-y-reverse-transition">
                  <template v-slot:activator>
                    <v-btn color="primary lighten-3" depressed dark small>
                      move
                      <v-icon right dark>
                        {{ mdiRunFast }}
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-btn
                    min-width="120"
                    color="info"
                    @click="callMoveTask({ to: btnName.id, from: slot.id, userId: todo.userId, taskId: task.id })"
                    v-show="btnName.id !== slot.id"
                    v-for="(btnName, btnIndex) in todo.slots"
                    :key="btnIndex + btnName"
                    small
                    depressed
                  >
                    {{ btnName.name }}
                  </v-btn>
                </v-speed-dial>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mdiArrowLeft, mdiRunFast } from '@mdi/js'
import { Action, Getter, namespace } from 'vuex-class'
const todoModule = namespace('todo')
@Component
export default class Todo extends Vue {
  @todoModule.Getter('todoByUserId') todoByUserId: any
  @todoModule.Action('moveTask') moveTask: any
  @todoModule.Action('addSlot') addSlot: any
  @todoModule.Action('addTask') addTask: any
  data() {
    return {
      mdiArrowLeft,
      mdiRunFast
    }
  }
  fab: any = {}
  slotName: string = ''
  task: any = {}
  todo: any = null
  mounted() {
    if (this.$route.params.userId) this.todo = this.todoByUserId(this.$route.params.userId) || null
  }
  callMoveTask({ to, from, userId, taskId }: any) {
    delete this.fab[from + taskId]
    this.moveTask({ to, from, userId, taskId })
  }
  callAddSlot({ userId, slotName }: any) {
    this.addSlot({ userId, slotName })
    this.slotName = ''
    this.todo = this.todoByUserId(userId)
  }
  setTask(slot: string, text: string, target: string) {
    if (!this.task[slot]) Vue.set(this.task, slot, {})
    Vue.set(this.task[slot], target, text)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slot-border {
  border: 1px solid rgb(241, 241, 241) !important;
}
</style>
