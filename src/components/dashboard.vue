<template>
<div class="text2">
    <!-- Using the elevation prop -->
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          :elevation="hover ? 24 : 6"
          class="mx-auto pa-6"
        >
          Name
        </v-card>
      </template>
    </v-hover>
    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          :elevation="hover ? 24 : 6"
          class="mx-auto pa-6"
        >
          Current Address
        </v-card>
      </template>
    </v-hover>
    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          :elevation="hover ? 24 : 6"
          class="mx-auto pa-6"
        >
          Permanent Address
        </v-card>
      </template>
    </v-hover>
    <div class="my-6"></div>
  </div>
</template>
<style>
.text2{
  margin-top:800px;
}
</style>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
  }
</script>
