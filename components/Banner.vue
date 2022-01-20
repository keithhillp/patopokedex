<template>
    <div class="banner">
        <h1 class="banner__title"><Pokeball />POKeDEX</h1>
    </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss" scoped>
  .banner {
    background-color: #f93f3f;

    .banner__title {
      font-size: 2.5em;
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