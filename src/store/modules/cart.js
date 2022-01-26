const cartModules = {
  state: {
    cart: [],
  },
  getters: {},
  mutations: {
    addCart(state, payload) {
      const has = state.cart.every((cur) => payload.id !== cur.id)
      if (has) {
        state.cart.push(payload)
      } else {
        state.cart.reduce((acc, cur) => {
          if (cur.id === payload.id) {
            cur.num++
          }
          return acc
        }, 0)
      }
    },
  },
  actions: {},
  modules: {},
}
export default cartModules
