<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12 pb-0">
        <v-img
          :src="require('../../assets/logo3.png')"
          class="my-3"
          contain
          height="200"
        />
        <v-col class="mb-4">
          <h2 class="font-weight-regular">WELCOME TO CLOUDY</h2>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <LoginScreen></LoginScreen>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginScreen from "@/components/LoginScreen.component.vue";

@Component({
  components: { LoginScreen },
})
export default class LoginView extends Vue {}
</script>
