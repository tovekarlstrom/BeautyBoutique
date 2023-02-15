import { createStore } from 'vuex'

const mutations = {
    clearCart(state) {
      state.counter = 0
    },
    increment(state) {
      state.counter++
    }
  },
  state = {
    counter: 0
  },
  actions = {
    increment(context) {
      context.commit('increment')
    }
  }

export default createStore({ mutations, state, actions, strict: true })
