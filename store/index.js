export const state = () => ({
    pokeList: {}
  })
  
  export const mutations = {
    update(state, value) {
        state.currentPoke = value
    }
  }
  