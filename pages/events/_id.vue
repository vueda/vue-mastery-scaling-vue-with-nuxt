<template>
  <v-container>
    <h1>{{ event.title }}</h1>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch (e) {
      error({ statusCode: 503, message: `Unable to fetch event #${params.id}` })
    }
  },
  computed: mapState({
    event: (state) => state.events.event
  }),
  head() {
    return {
      title: 'Event ' + this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about event ' + this.event.title
        }
      ]
    }
  }
}
</script>
