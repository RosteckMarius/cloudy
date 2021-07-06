<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <DropdownMenu></DropdownMenu>

        <v-img
          :src="require('./assets/Name.png')"
          contain
          min-width="100"
          to="/"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view>
        <LoginScreen></LoginScreen>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import LoginScreen from "./views/LoginScreen/Login.view";
import DropdownMenu from "./components/DropdownMenu.component.vue";

export default {
  name: "App",

  components: {
    LoginScreen,
    DropdownMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
