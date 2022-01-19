<template>
    <div class="pokeball" />
</template>

<script>
export default {
  name: 'Pokeball',
}
</script>

<style lang="scss" scoped>
    .pokeball {
        position: relative;
        width: 50px;
        height: 50px;
        background: #4d63ec;
        border-radius: 100%;
        margin: 0 25px 0 0;
        flex-shrink: 0;

        &::after {
            content: '';
            height: 34%;
            width: 34%;
            border-radius: 50%;
            position: absolute;
            inset: 0 0 0 0;
            margin: auto;
            background-color: #4d63ec;
            border: 4px solid #6dbffb
        }

        &::before {
            content: '';
            height: 10%;
            width: 100%;
            position: absolute;
            inset: 0 0 0 0;
            margin: auto;
            background-color: #6dbffb;
        }
    }
</style>