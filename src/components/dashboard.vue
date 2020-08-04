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

            <v-list-item class="reference pa-2" link to="/reference">
              <v-list-item-action>
                <!--reference button-->
                <v-icon color="gray">mdi-star</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h1>reference</h1>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="message pa-2" link to="/message">
              <v-list-item-action>
                <!--message button-->
                <v-icon color="gray">mdi-star</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h1>message</h1>
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
              <v-col class="shrink">
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
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