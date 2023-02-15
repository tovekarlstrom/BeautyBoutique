<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    emits: ['close'],
    computed: {
      ...mapState(['counter'])
    },

    methods: {
      ...mapMutations(['clearCart'])
    }
  }
</script>

<template>
  <div id="modalCartContainer">
    <p>{{ counter }}</p>
    <img
      alt="close cart x"
      @click="$emit('close')"
      id="closeCartModal"
      src="../../assets/x.png"
    />

    <button
      id="clearCartButton"
      @click="clearCart"
      type="button"
      class="btn btn-dark"
    >
      Clear Cart
    </button>
  </div>
</template>
<style scoped>
  p {
    font-size: 1.5em;
  }

  #topCartContainer {
    display: flex;
    justify-content: space-between;
  }

  #closeCartModal {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 5px;
  }
  #modalCartContainer {
    position: fixed;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 150px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgb(255, 255, 255);
    border-bottom: solid 1px rgb(189, 192, 189);
    border-left: solid 1px rgb(189, 192, 189);
    border-right: solid 1px rgb(189, 192, 189);
    margin-top: 50px;
    display: flex;
    padding: 10px 0 10px 10px;
  }
</style>
