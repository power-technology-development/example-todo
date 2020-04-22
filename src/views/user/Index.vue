<template>
  <div class="user">
    <v-navigation-drawer class="leftbar-setting black--text" tile fixed v-model="drawer" color="white" :mini-variant="miniVariant" app>
      <v-list>
        <v-col align="center">
          <img src="@/assets/logo.png" width="60" alt="" />
        </v-col>
        <v-list-item :to="`/`" color="primary">
          <v-list-item-icon>
            <v-icon>{{ mdiHomeOutline }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item>
        <v-list-item to="/user/list" color="primary">
          <v-list-item-icon>
            <v-icon>{{ mdiClipboardListOutline }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>List</v-list-item-title>
        </v-list-item>
        <v-list-item to="/user/add" color="primary">
          <v-list-item-icon>
            <v-icon>{{ mdiAccountPlusOutline }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Add User</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="white" flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Todo</v-toolbar-title>
      <v-spacer></v-spacer>
      <p v-if="$vuetify.breakpoint.smAndUp" class="pt-4 text-right normal--text">Boat Natthapon <br />Sellsuki</p>
      <v-avatar size="40" class="ml-3">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-app-bar>
    <v-content class="set-content">
      <router-view class="white card-height"></router-view>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {
  mdiHomeOutline,
  mdiAccountKeyOutline,
  mdiAccountSettings,
  mdiBellOutline,
  mdiAccountPlusOutline,
  mdiNoteOutline,
  mdiBriefcaseOutline,
  mdiFlag,
  mdiClipboardListOutline
} from '@mdi/js'

@Component
export default class User extends Vue {
  data() {
    return {
      mdiHomeOutline,
      mdiAccountSettings,
      mdiBellOutline,
      mdiFlag,
      mdiAccountKeyOutline,
      mdiAccountPlusOutline,
      mdiBriefcaseOutline,
      mdiNoteOutline,
      mdiClipboardListOutline
    }
  }
  drawer = true
  items = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
    { title: 'Photos', icon: 'mdi-image' },
    { title: 'About', icon: 'mdi-help-box' }
  ]
  color = 'primary'
  right = false
  miniVariant = false
  expandOnHover = false
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-height {
  min-height: 100vh !important;
}
.v-navigation-drawer__border {
  background-color: white !important;
}
.set-content {
  padding: 1% !important;
}
.leftbar-setting {
  box-shadow: 0px 6px 6px rgba(134, 134, 134, 0.15) !important;
  z-index: 100 !important;
}
</style>
