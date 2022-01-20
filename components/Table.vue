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
        <b-table 
        id="poke-table"
        class="table" 
        :busy="isBusy" 
        striped hover 
        :items="data" 
        :fields="fields" 
        :filter="filter" 
        sticky-header
        :per-page="perPage"
        :current-page="currentPage"
        @filtered="onFiltered"
        >
          <template #cell(url)="data">
            {{ stripIdNum(data.item.url) }}
          </template>
          <template #cell(info)="data">
            <b-button variant="primary" @click="setId(data.item.name)">Info</b-button>
          </template>
          <template #table-busy>
            <Loading />
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          aria-controls="poke-table"
          align="fill"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      data: [],
      fields: [
        {
          key: 'url',
          label: '#',
          sortable: true
        },
        {
          key: 'name',
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
      filter: null,
      perPage: 20,
      currentPage: 1,
      totalRows: 0
    }
  },
  methods: {
    //Fetch API data if id in url then set to current item if not set first item to current item
    async getPokemon() {
      let response = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon/?limit=1118')
      this.data = response.results
      this.$route.query.pokemon == null ? this.currentItem = this.data[0].name : this.currentItem = this.$route.query.pokemon
      this.totalRows = this.data.length
      this.isBusy = !this.isBusy
    },
    setId(id) {
      this.$router.push({ query: { pokemon: id } })
      this.currentItem = id
    },
    stripIdNum(url){
      let urlStrip = url.split('/');
      return urlStrip.pop() || urlStrip.pop(); 
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  mounted(){
    this.getPokemon();
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
      height: calc(100vh - 155px);

      @media only screen and (max-width: 1050px) {
        height: auto;
        max-height: calc(50vh - 115px);
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
