<template>
  <div>
  <v-card>
    <v-toolbar dark color="gray">
        <v-btn icon dark to="/dashboard">
        <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Back</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-list three-line subheader>
        <v-subheader>Personal Information</v-subheader>
        <v-list-item>
        <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>Precious Angel Tamparong</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
        <v-list-item>
        <v-list-item-content>
            <v-list-item-title>Current Address</v-list-item-title>
            <v-list-item-subtitle>San Alberto Carmelite Formation Center, Talamban, Cebu City </v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
        <v-list-item>
        <v-list-item-content>
            <v-list-item-title>Permanent Address</v-list-item-title>
            <v-list-item-subtitle>Inansagan, Campalanas, Lazi, Siquijor</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-card
    max-width="375"
    class="mx-auto ma-5"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      height="300px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn dark icon class="mr-4">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

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
</v-card>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data () {
      return {
      }
    },
    // methods:{
    //   navigate(){
    //     this.$router.push('/profile')
    //   }
    // },
  }
</script>
