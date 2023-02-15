<script>
  import ProductInfo from '../components/ProductInfo.vue'
  import ProductCard from '../components/ProductCard.vue'
  import axios from 'axios'

  const brands = ['clinique', 'maybelline', 'smashbox', 'nyx']

  export default {
    created() {
      this.axiosGetBrands(brands)
    },
    components: {
      ProductCard,
      ProductInfo
    },
    data() {
      return {
        result: [],
        selectedProduct: null
      }
    },
    watch: {
      '$route.params'() {
        this.axiosGetBrands(brands)
      }
    },

    methods: {
      openModal(product) {
        this.selectedProduct = product
        document.body.style.overflow = 'hidden'
      },
      closeModal() {
        this.selectedProduct = null
        document.body.style.overflow = 'auto'
      },

      axiosGetBrands(brands) {
        brands.forEach((brand) => {
          axios
            .get(
              `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${this.$route.params.category}`
            )
            .then((response) => {
              this.result = []
              for (let x = 0; x < response.data.length; x++) {
                this.result.push(response.data[x])
              }
            })
        })
      }
    }
  }
</script>
<template>
  <div>
    <ProductCard
      :key="product.id"
      v-for="product in result"
      :product="product"
      @click="openModal(product)"
    />
    <ProductInfo
      v-if="selectedProduct"
      :product="selectedProduct"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 10px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: center;
  }
</style>
