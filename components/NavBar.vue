<template>
  <v-app-bar app color="green" dark>
    <v-toolbar-title>Real World Events</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text rounded nuxt to="/">
      <v-icon>mdi-magnify</v-icon>
      List
    </v-btn>
    <v-btn text rounded nuxt to="/create">
      <v-icon>mdi-plus</v-icon>
      Add
    </v-btn>
  </v-app-bar>
</template>
