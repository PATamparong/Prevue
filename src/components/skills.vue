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
    <v-card>
    <v-card-title>
      Skills
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
    <v-divider></v-divider>
</v-card>
</div>
</template>
<script>
  export default {
    data () {
      return {
          search: '',
        headers: [
          {
            text: 'Area',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Mother Tongue', value: 'm_tongue' },
          { text: 'Second Language', value: 'l_tongue' },
          { text: 'Other Language', value: 'o_tongue' },
        ],
        desserts: [
          {
            name: 'Problem Solving',
          },
          {
            name: 'Leadership and teamwork',
          },
          {
            name: 'Communication Skills',
          },
          {
            name: 'Java Programming',
          },
          {
            name: 'Web Development',
          },
          {
            name: 'Languages ',
            m_tongue: 'Bisaya',
            l_tongue: 'Filipino',
            o_tongue: 'English',
          },
        ],
      }
    },
    // methods:{
    //   navigate(){
    //     this.$router.push('/profile')
    //   }
    // },
  }
</script>