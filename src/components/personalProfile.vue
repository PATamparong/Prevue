

<template>
  <div>

  <v-card class="nav" color="grey lighten-3" >
    <v-navigation-drawer
      absolute
      permanent
      :elevation="n - 1"
      color="blue lighten-1"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon size="60px" dark>mdi-account-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title><v-h1>Precious Angel Tamparong</v-h1></v-list-item-title>
            <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list dense>
        <v-btn class="ma" color="orange lighten-1"><v-p class="text">Home</v-p></v-btn>
        <!--personal profile-->
        <v-row justify="left">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="btn"
              >
                Personal Profile
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
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
        </v-dialog>
        </v-row>
        <!--skills-->
        <v-row justify="left">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="btn"
              >
                Skills
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
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
        </v-dialog>
        </v-row>
        <!--Experience-->
        <v-row justify="left">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="btn"
              >
                Experience
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
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
        </v-dialog>
        </v-row>
        <!--Summary-->
        <v-row justify="left">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="btn"
              >
                Summary
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
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
        </v-dialog>
        </v-row>
        <!--Reference-->
        <v-row justify="left">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="btn"
              >
                Reference
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
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
        </v-dialog>
        </v-row>
      </v-list>
      
    </v-navigation-drawer>
  </v-card>
  </div>
</template>
<style>
.nav{
  height:700px;
  margin-top:70px;
  padding-left:70px;
}
.ma{
  width:90%;
  margin:15px;
}
.btn{
  width:100%;
  margin:15px;
}
.text{
  :left;
}
</style>
<script>
  export default {
    data () {
      return {
        drawer: true,
        mini: true,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    methods:{
      navigate(){
        this.$router.push('/profile')
      }
    },
  }
</script>
