<template>
  <div class="home">
    <v-parallax v-if="$vuetify.breakpoint.mdAndUp" height="400" dark src="@/assets/banner-maker.jpeg"> </v-parallax>
    <v-row align="center" justify="start">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-col>
      <v-col class="text-center" cols="12">
        <v-btn to="/user/list" color="primary">Get Start</v-btn>
      </v-col>
      <v-col class="text-center" cols="12">
        <HomeContent />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HomeContent from '@/components/home/Content.vue'

@Component({
  components: {
    HomeContent
  }
})
export default class Home extends Vue {}
</script>
