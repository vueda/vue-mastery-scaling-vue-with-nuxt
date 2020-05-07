import axios from 'axios'

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
      .get('http://localhost:3000/events')
      .then(({ data }) => commit('SET_EVENTS', data))
  },
  fetchEvent({ commit }, id) {
    return axios
      .get(`http://localhost:3000/events/${id}`)
      .then(({ data }) => commit('SET_EVENT', data))
  }
}
