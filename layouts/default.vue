<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  head() {
    return {
      titleTemplate: '%s - Real World Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Where you can find all the events taking place in your neighborhood.'
        }
      ]
    }
  }
}
</script>
