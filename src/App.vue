<template>
  <v-app id="app">
 <NavBar></NavBar>
  </v-app>
</template>

<script>
import NavBar from '@/views/Home.vue'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
