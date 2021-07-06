<template>
  <v-container style="width: fit-content">
    <v-col>
      <v-spacer />

      <v-card class="mb-2">
        <v-card-title class="justify-center"> Konto erstellen</v-card-title>
        <v-divider />
        <div class="px-8 py-8 pb-0">
          <v-card-text class="ma-0 pa-0"> Ihr Name</v-card-text>
          <v-text-field v-model="form.username" dense outlined required>
          </v-text-field>

          <v-card-text class="ma-0 pa-0"> E-Mail</v-card-text>
          <v-text-field
            v-model="form.email"
            :rules="emailPatternRules"
            dense
            outlined
            required
          >
          </v-text-field>

          <v-card-text class="ma-0 pa-0"> Passwort</v-card-text>
          <v-text-field
            v-model="form.password"
            dense
            outlined
            required
            type="password"
          >
          </v-text-field>

          <v-card-text class="ma-0 pa-0">
            Passwort erneut eingeben
          </v-card-text>
          <v-text-field
            v-model="form.password_repeat"
            :rules="passwordsIdentical"
            dense
            outlined
            required
            type="password"
          >
          </v-text-field>

          <v-card-actions>
            <v-spacer />
            <router-link class="justify-center" to="/register">
              <v-btn dark @click="signUp"> Sign up</v-btn>
            </router-link>
            <v-spacer />
          </v-card-actions>
        </div>
      </v-card>

      <v-spacer />
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Credentials, RegisterData } from "@/api/api";
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import AuthService from "@/services/AuthService.ts";

@Component
export default class Register extends Vue {
  form: RegisterData = {
    username: "",
    email: "",
    password: "",
    password_repeat: "",
    msg: "",
  };

  passwordsIdentical = [
    (content: string) =>
      (!!content && content) == this.form.password_repeat ||
      "Passwords do not match",
  ];

  emailPatternRules = [
    (content: string) =>
      !content ||
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(content) ||
      "Ungültige E-Mail Adresse",
  ];

  async signUp() {
    const cred: Credentials = {
      email: this.form.email,
      password: this.form.password,
    };
    try {
      const response = await AuthService.signUp(cred);
      this.form.msg = response.msg;
    } catch (error) {
      console.log(error);
      this.form.msg = error.response;
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  sendFeedback() {
    console.log(this.form);
  }

  async testGet() {
    axios.get("https://cloudy.tijazcloud.de/users/hello", {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpdXMucm9zdGVja0BnbWFpbC5jb20iLCJpc3MiOiJjbG91ZHkiLCJleHAiOjE2MjU2MDgwMDR9.kKh_KGTNJrURDHdsKmUA4J6vKSvsfaTdvY7goKyGsOg",
      },
    });
  }
}
</script>

<style scoped></style>
