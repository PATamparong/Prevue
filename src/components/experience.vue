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
      <v-timeline class="ma-12">
        <v-timeline-item v-for="n in 1" :key="n" color="blue lighten-2" large>
          <template v-slot:opposite>
            <span>2018</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">Game Project</v-card-title>
            <v-card-text>Develop game application project that uses HTML, css, and javascript to maximize the efficiency of the project.</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" color="red lighten-2" large>
          <template v-slot:opposite>
            <span>September 2018</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">Project in Python</v-card-title>
            <v-card-text>Create first project in Python that uses GUI Tinker.This Project helps me understand the importance of creating a clean code also by applying documentation in every step of developing your code.</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" color="blue lighten-2" large>
          <template v-slot:opposite>
            <span>December 2018</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">Project in Web Development</v-card-title>
            <v-card-text>Apply my learnings by creating my first project in Web Development. It specifically enhance my intuitive learning in designing web.</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" color="red lighten-2" large>
          <template v-slot:opposite>
            <span>April 2019</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">Java Project</v-card-title>
            <v-card-text>Create project in java, a restaurant management system. We also normalized the database of our project.</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" color="blue lighten-2" large>
          <template v-slot:opposite>
            <span>September 2019</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">Speak Dating Activity</v-card-title>
            <v-card-text>I attend a speak dating activity in USC campus. The is about how agile works and to where we can apply it.</v-card-text>
          </v-card>
        </v-timeline-item>
         <v-timeline-item v-for="n in 1" :key="n" color="blue lighten-2" large>
          <template v-slot:opposite>
            <span>January to February 2019</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">Specialization(phpLaravel)</v-card-title>
            <v-card-text>I help develop a library sytem project that uses phpLaravel framework.</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>