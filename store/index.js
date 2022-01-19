export const state = () => ({
    currentPoke: ''
  })
  
  export const mutations = {
    update(state, value) {
        state.currentPoke = value
    }
  }
  