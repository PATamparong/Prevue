<template>
  <div>
      <v-toolbar dark color="gray">
        <v-btn icon dark to="/dashboard">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Personal Profile</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list three-line subheader class="ma-16">
        <v-subheader><h1> Personal Information</h1></v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>Precious Angel Tamparong</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Current Address</v-list-item-title>
            <v-list-item-subtitle>San Alberto Carmelite Formation Center, Talamban, Cebu City</v-list-item-subtitle>
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
      <!-- school attended -->
      <v-list three-line subheader class="ma-16">
        <v-card-text class="font-weight-medium mt-4 text-center overline">
        School Attended:
        </v-card-text>
      <v-row class="ma-2 pa-4">
        <v-col cols="12" sm="6">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="150" max-width="300">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQId_Jjo9ejdmKmj4p5m-9Rne6nqd0f5kRhUQ&usqp=CAU"
              >
                <div class="fill-height bottom-gradient"><h2>Tertiary</h2></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >San Carlos University</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="6" sm="4">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="200" max-width="300">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4F0633illpylrLobXlDnJEgQnWlMmf1e5eg&usqp=CAU"
              >
                <div class="fill-height bottom-gradient"><h2>Secondary</h2></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >The Sisters of Mary-Girlstown,Inc.</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        </v-row>
      </v-list>
  </div>
</template>
<style>
</style>
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
