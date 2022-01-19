<template>
    <div class="banner">
        <h1 class="banner__title"><Pokeball />Sinnoh POKeDEX </h1>
    </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss" scoped>
  .banner {
    background-color: #6dbffb;

    .banner__title {
      width: fit-content;
      display: flex;
      align-items: center;
      padding: 15px;
      color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
      text-transform: uppercase;
      margin: 0;
    }
  }
</style>