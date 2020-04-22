<template>
  <div class="home-content">
    <v-row align="center" justify="start">
      <v-col class="text-center px-3" :cols="$vuetify.breakpoint.mdAndUp ? '4' : '12'">
        <v-card class="mx-auto" flat max-width="400">
          <v-card-subtitle class="pb-0 subtitle-1">Approachable</v-card-subtitle>
          <v-card-text class="text--primary">
            <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center px-3" :cols="$vuetify.breakpoint.mdAndUp ? '4' : '12'">
        <v-card class="mx-auto" flat max-width="400">
          <v-card-subtitle class="pb-0 subtitle-1">Versatile</v-card-subtitle>
          <v-card-text class="text--primary">
            <p>An incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center px-3" :cols="$vuetify.breakpoint.mdAndUp ? '4' : '12'">
        <v-card class="mx-auto" flat max-width="400">
          <v-card-subtitle class="pb-0 subtitle-1">Performant</v-card-subtitle>
          <v-card-text class="text--primary">
            <p>20KB min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Efforts</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HomeContent extends Vue {}
</script>
