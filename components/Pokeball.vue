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
        background: #fff;
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
            background-color: #fff;
            border: 4px solid #f93f3f;
        }

        &::before {
            content: '';
            height: 10%;
            width: 100%;
            position: absolute;
            inset: 0 0 0 0;
            margin: auto;
            background-color: #f93f3f;
        }
    }
</style>