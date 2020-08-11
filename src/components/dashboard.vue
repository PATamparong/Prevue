<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped class="navDraw">
          <v-list dense>
            <v-list-item class="profile pa-2" link to="/profile">
              <v-list-item-action>
                <v-icon color="primary">mdi-view-dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <!--personal profile-->
                  <h1>personal profile</h1>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="skills pa-2" link to="/skills">
              <v-list-item-action>
                <!--skills button-->
                <v-icon color="gray">mdi-star</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h1>skills</h1>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="experience pa-2" link to="/experience">
              <v-list-item-action>
                <!--experience button-->
                <v-icon color="gray">mdi-star</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h2>experience</h2>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="resume pa-2" link to="/resume">
              <v-list-item-action>
                <!--resume button-->
                <v-icon color="gray">mdi-star</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h1>resume</h1>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="message pa-2" link to="/contact">
              <v-list-item-action>
                <!--contact button-->
                <v-icon color="gray">mdi-star</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h1>contact</h1>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="grey darken-2">
          <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="title">Precious Profile</v-toolbar-title>
          <!--back to home-->
          <div justify="right" align="right" class="text-center pa-10">
            <v-btn rounded to="/" color="primary" dark>Home</v-btn>
          </div>
        </v-app-bar>

        <v-main class="article">
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col class="ma-2">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="250" max-width="350">
                    <v-img class="p-16"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq9kkvuOCPSZwWQRcgBm11oTDpKZkWE69J4Q&usqp=CAU"
                    >
                      <div class="fill-height bottom-gradient"></div>
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal display-1 white--text"
                          style="height: 100%;"
                        ><h4 class="ma-2">Life isn't about finding yourself, it's about creating yourself</h4></div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-main>

        <v-footer color="grey darken-3" app>
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>
<style>
.btn {
  float: right;
}
.navDraw {
  background-image: linear-gradient(#a9a9a9 0%, #202020 100%);
  color: white;
}
.title {
  font-style: Italic;
  color: white;
}
.article {
  grid-area: article;
  background-image: radial-gradient(circle, white, #d3d3d3, #a9a9a9);
}
</style>
<script>
export default {
  data() {
    return {
      drawer: null,
      mini: true,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    created() {
      this.$vuetify.theme.dark = true;
    }
  }
};
</script>