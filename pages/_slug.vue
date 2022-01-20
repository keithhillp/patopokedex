<template>
  <main>
    <Banner />
    <Table />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Pokemon'
})
</script>

<style lang="scss">
  body {
    font-family: 'Press Start 2P', cursive;
    overflow: hidden;

    @media only screen and (max-width: 650px) {
      font-size: 0.6rem;
    }

    main {
      max-height: 100vh;
      height: 100%;
      overflow: hidden;
    }
  }
</style>
