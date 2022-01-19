<template>
    <Loading v-if="isBusy" />
    <div v-else class="poke-card" v-bind:class="'poke-card--' + currentPokemon.types[0].type.name">
        <div class="poke-card__title">
            <h1>{{ currentPokemon.name }}</h1>
            <p v-for="(item, index) in currentPokemon.types" :key="index">{{ item.type.name }}</p>
            <h2 v-if="currentPokemon.id">ID:{{ currentPokemon.id }}</h2>
        </div>
        <div class="poke-card__img">
            <img v-if="currentPokemon.sprites" :src="currentPokemon.sprites.front_default"  width="" alt="">
        </div>
        <div class="poke-card__info">
            <p v-for="(item, index) in currentPokemon.moves.slice(0, 4)" :key="index">{{ item.move.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NuxtTutorial',
    data() {
        return {
            currentPokemon: {},
            isBusy: true,
        }
    },
    props: {
        pokeId: null
    },
    methods: {
        async getItem() {
            let response = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon/' + this.pokeId);
            this.currentPokemon = response;
            this.isBusy = false;
        }
    },
    watch: {
        pokeId: function () {
            this.isBusy = true;
            this.getItem();
        }
    }
}
</script>

<style lang="scss" scoped>
    .poke-card {
        height: 100%;
        width: 100%;
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        overflow: hidden;
        color: white;
        background-image: url('../static/assets/background.jpg');
        background-position: center;
        background-size: cover;
        
        .poke-card__title {
            padding: 25px;
            background-color: rgba($color: #000, $alpha: 0.4);

            h1 {
                text-transform: capitalize;
                font-size: 2.5em;
            }

            p {
                display: inline-block;
                background-color: rgba($color: #fff, $alpha: 0.5);
                margin-right: 8px;
                padding: 0 5px;
            }

            h2 {
                position: absolute;
                inset: 0 0 auto auto;
                text-align: right;
                padding: 25px;
                font-size: 2em;
                line-height: 1.7em;
            }
        }

        .poke-card__img {
            grid-column: 1/3;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 60%;
                display: block;
                position: relative;
                z-index: 1;

                @media only screen and (max-width: 1050px) {
                    height: 100%;
                }
            }
        }

        .poke-card__info {
            padding: 25px;
            background-color: rgba($color: #000, $alpha: 0.4);
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;

            @media only screen and (max-width: 1050px) {
                display: none;
            }

            p {
                font-size: 1.5em;
                padding: 5px;
                text-align: center;
                width: 40%;
                background-color: rgba($color: #fff, $alpha: 0.5);
            }
        }

        .pokeball {
            position: absolute;
            height: 75vw;
            width: 75vw;
            bottom: -60%;
            right: -50%;
            margin: auto;
            opacity: 0.15;
            background-color: white;
            z-index: 0;

          &::after {
            background-color: white;
            border-color: blue;
            border-width: 25px;
          }

          &::before {
            background-color: blue;
          }
        }

        &--water {
            background-image: url('../static/assets/background--water.jpg');
        }

        &--rock,
        &--ghost {
            background-image: url('../static/assets/background--cave.png');
        }
    }
</style>