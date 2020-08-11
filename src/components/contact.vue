<template>
  <div>
      <v-toolbar dark color="gray">
        <v-btn icon dark to="/dashboard">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Contact</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card max-width="375" class="mx-auto ma-16">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="250px" dark>
          <v-row class="fill-height">
            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-12 pt-12">
              <div class="display-1 pl-12 pt-6">Precious Angel</div>
              <div class="display-1 pl-12">Tamparong</div>
            </v-card-title>
          </v-row>
        </v-img>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">mdi-phone</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>09360780534</v-list-item-title>
              <v-list-item-subtitle>Mobile</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">mdi-email</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>tamparongpreciousangel@gmail.com</v-list-item-title>
              <v-list-item-subtitle>Personal</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>preciousangel.tamparong@student.passerellesnumeriques.org</v-list-item-title>
              <v-list-item-subtitle>Work</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>
        </v-list>
      </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
  // methods:{
  //   navigate(){
  //     this.$router.push('/profile')
  //   }
  // },
};
</script>
