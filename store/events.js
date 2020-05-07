import axios from 'axios'

const baseURL =
  'http://my-json-server.typicode.com/vueda/vue-mastery-scaling-vue-with-nuxt'

export const state = () => ({
  events: [],
  event: {}
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  fetchEvents({ commit }) {
    return axios
      .get(`${baseURL}/events`)
      .then(({ data }) => commit('SET_EVENTS', data))
  },
  fetchEvent({ commit }, id) {
    return axios
      .get(`${baseURL}/events/${id}`)
      .then(({ data }) => commit('SET_EVENT', data))
  }
}
