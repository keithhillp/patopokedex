<template>
  <div>
    <div class="grid">
      <div class="grid__display">
        <Item :pokeId="currentItem" />
      </div>
      <div class="grid__table">
        <b-form-group class="m-0">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>
        </b-form-group>
        <b-table class="table" :busy="isBusy" striped hover :items="data.pokemon_entries" :fields="fields" :filter="filter" sticky-header>
          <template #cell(info)="data">
            <b-button name="more info" :to="data.item.pokemon_species.name" variant="primary">Info</b-button>
          </template>
          <template #table-busy>
            <Loading />
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      data: {},
      fields: [
        {
          key: 'entry_number',
          label: '#',
          sortable: true
        },
        {
          key: 'pokemon_species.name',
          label: 'Species name',
          sortable: true
        },
        {
          key: 'Info',
          label: ''
        }
      ],
      isBusy: true,
      currentItem: null,
      filter: null
    }
  },
  methods: {
    //Fetch API data if id in url then set to current item if not set first item to current item
    async getPokemon() {
      let response = await this.$axios.$get('https://pokeapi.co/api/v2/pokedex/5')
      this.data = response
      this.$store.commit('update', response)
      this.$route.params.slug == null ? this.currentItem = this.data.pokemon_entries[0].pokemon_species.name : this.currentItem = this.$route.params.slug
      this.isBusy = !this.isBusy
    },
  },
  mounted(){
    //Check if API data is cached, if not then fetch data and cache in Vuex
    if(this.$store.state.currentPoke == undefined) {
      this.getPokemon();
    } else {
      this.data = this.$store.state.currentPoke
      this.$route.params.slug == null ? this.currentItem = this.data.pokemon_entries[0].pokemon_species.name : this.currentItem = this.$route.params.slug
      this.isBusy = !this.isBusy
    }
  },
}
</script>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    height: calc(100vh - 80px);
    overflow: hidden;

    @media only screen and (max-width: 1050px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .grid__display {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .grid__table {
      position: relative;
      height: calc(100vh - 80px);

      @media only screen and (max-width: 1050px) {
        height: auto;
        max-height: 40vh;
      }

      .table {
      max-height: 100%;
      height: auto;
      margin: 0;

      tr {
        text-transform: capitalize;
        font-size: 1.3em;

        button {
          font-size: 1em;
        }
        }
      }
    }
  }
</style>
