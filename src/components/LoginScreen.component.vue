<template>
  <v-container style="width: fit-content">
    <v-col>
      <v-card class="mb-2">
        <v-card-title class="justify-center">
          Login to your database
        </v-card-title>
        <v-divider />
        <div class="px-8 py-8 pb-0">
          <v-card-text class="ma-0 pa-0">
            Username or email adress
          </v-card-text>
          <v-text-field v-model="form.email" outlined dense></v-text-field>
          <v-card-text class="ma-0 pa-0"> Password </v-card-text>
          <v-text-field v-model="form.password" outlined dense></v-text-field>
        </div>
        <v-card-actions class="pt-0 pb-8">
          <v-spacer />

          <router-link to="/register">
            <v-btn color="secondary" @click="login"> Sign in </v-btn>
          </router-link>

          <v-spacer />
        </v-card-actions>
      </v-card>

      <v-card outlined>
        <v-card-text class="text-center" onclick="">
          New to Cloudy?
          <router-link to="/register">Sign up here</router-link>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
//TODO Sign up link does not forward to Browser
import { Component, Vue } from "vue-property-decorator";
import { LoginData } from "@/api/api";
import axios from "axios";
import AuthService from "@/services/AuthService";

@Component
export default class LoginComponent extends Vue {
  form: LoginData = {
    email: "",
    password: "",
  };
  msg: any;
  async login() {
    try {
      const credentials = {
        email: this.form.email,
        password: this.form.password,
      };
      const response = await AuthService.login(credentials);
      this.msg = response.msg;
      const token = response.token;
      const user = response.user;
      await this.$store.dispatch("login", { token, user });
      await this.$router.push("/about");
    } catch (error) {
      this.msg = error.response.data.msg;
    }
  }
}
</script>

<style scoped></style>
