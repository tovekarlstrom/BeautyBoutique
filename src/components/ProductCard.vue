<script>
  export default {
    props: {
      product: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<template scoped>
  <div class="productBox">
    <div class="imgBox">
      <img class="productImg" alt="" :src="product.image_link" />
    </div>
    <div class="productInfo">
      <p class="brand">{{ product.brand }}</p>
      <p class="name">{{ product.name }}</p>
      <p>{{ product.price }}$</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $card-box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .name {
    font-weight: bold;
  }
  .imgBox {
    width: 300px;
  }

  .productImg {
    width: 300px;
    height: 300px;
  }
  .productBox {
    align-items: center;
    box-shadow: $card-box-shadow;
    margin: 20px;
    margin-left: 10px;
    width: 300px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
