<template>
  <v-app id="inspire">
    <!--<v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-app-bar app color="indigo" dark>
     <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
      <v-toolbar-title>Top Frameworks</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
//import { fetchAllData } from "../util";

export default {
  data() {
    return {
      drawer: null,
      headers: [
        { text: "Name", value: "full_name" },
        { text: "Stars", value: "stargazers_count" }
      ],
      desserts: []
    }
  },
  created() {
    /*fetchAllData()
      .then(response => (this.desserts = response))
      .catch(err => console.error(err));*/
  }
};
</script>