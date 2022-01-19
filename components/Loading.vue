<template>
    <div class="loading">
        <Pokeball />
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style lang="scss" scoped>
    .loading {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 30px 0;

        .pokeball {
          animation-name: spin;
          animation-duration: 1000ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear; 
          background: rgb(255,0,0);
          background: linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(255,255,255,1) 50%);

          &::after {
            background-color: #fff;
            border-color: #000;
          }

          &::before {
            background-color: #000;
          }
        }

        p {
          width: 100%;
          text-align: center;
          margin-top: 10px;
        }
    }

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
</style>