<template>
  <v-container fluid>
    <v-card
      nuxt
      :to="eventDetail"
      outlined
      ripple
      class="mx-auto"
      max-width="400"
    >
      <v-card-title>{{ event.title }}</v-card-title>
      <v-card-subtitle class="green--text darken-1">
        @{{ event.time }} on {{ parsedDate }}
      </v-card-subtitle>
      <v-card-text class="green--text darken-1">
        {{ event.attendees.length }} attending
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    eventDetail() {
      return `/events/${this.event.id}`
    },
    parsedDate() {
      const eventDate = new Date(this.event.date)
      return eventDate.toDateString()
    }
  }
}
</script>
