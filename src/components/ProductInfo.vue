<script>
  import { mapActions } from 'vuex'
  export default {
    props: {
      product: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        message: null,
        rateProduct: ''
      }
    },
    methods: {
      ...mapActions(['increment']),
      close() {
        this.$emit('close')
      }
    },
    emits: ['close']
  }
</script>

<template>
  <div id="modalContainer">
    <div><img id="modalImg" :src="product.image_link" alt="" /></div>
    <div id="modalProductInfo">
      <img
        alt="close product info"
        @click="$emit('close')"
        id="closeInfoModal"
        src="../../assets/x.png"
      />
      <h2>{{ product.name }}</h2>
      <p>{{ product.category }}</p>
      <p>{{ product.description }}</p>
      <div v-if="product.product_colors.length > 0">
        <p>Colors</p>
        <span
          v-for="(color, index) in product.product_colors"
          :key="index"
          :style="{
            backgroundColor: color.hex_value,
            width: '50px',
            height: '50px',
            display: 'inline-block',
            margin: '5px'
          }"
        />
        <div>
          <p v-if="product.rating !== null">Rating {{ product.rating }}</p>
          <button @click="increment" type="button" class="btn btn-dark">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #closeInfoModal {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  #modalImg {
    width: 300px;
    height: 300px;
  }
  #modalProductInfo {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  #modalContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgb(243, 237, 230);
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 200px;
    display: flex;
  }
</style>
