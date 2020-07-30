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
