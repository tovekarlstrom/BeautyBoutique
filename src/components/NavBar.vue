<script>
  import CartModal from './CartModal.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      CartModal
    },
    computed: {
      ...mapState(['counter'])
    },
    data() {
      return {
        showElement: false,
        cartContainer: null
      }
    },
    methods: {
      openModal() {
        this.cartContainer = 1
        document.body.style.overflow = 'hidden'
      },
      closeModal() {
        this.cartContainer = null
        document.body.style.overflow = 'auto'
      }
    }
  }
</script>

<template>
  <nav>
    <div id="topNav">
      <ul id="homeContact">
        <li>
          <RouterLink to="/">BeautyBoutique</RouterLink>
        </li>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact"> Contact </RouterLink>
        </li>
      </ul>

      <div id="cartContainer">
        <p>{{ counter }}</p>
        <img
          @click="openModal"
          id="cart"
          src="../../assets/cart.png"
          alt="cart"
        />
      </div>
    </div>

    <div id="navbar">
      <div class="category">
        <h2>Base</h2>
        <ul class="listItem">
          <li><RouterLink to="/foundation">Foundation</RouterLink></li>
          <li><RouterLink to="/bronzer">Bronzer</RouterLink></li>
          <li><RouterLink to="/blush">Blush</RouterLink></li>
        </ul>
      </div>
      <div class="category">
        <h2>Eyes</h2>
        <ul class="listItem">
          <li><RouterLink to="/eyeshadow">Eyeshadow</RouterLink></li>
          <li><RouterLink to="/eyeliner">Eyeliner</RouterLink></li>
          <li><RouterLink to="/mascara">Mascara</RouterLink></li>
        </ul>
      </div>
      <div class="category">
        <h2>Lips</h2>
        <ul class="listItem">
          <li><RouterLink to="/lipstick">Lipstick</RouterLink></li>
        </ul>
      </div>
    </div>
  </nav>
  <CartModal v-if="cartContainer" @close="closeModal" />
</template>

<style scoped>
  #topNav {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding-top: 10px;
  }
  #homeContact {
    display: flex;
    width: 280px;
    align-items: center;
    justify-content: space-between;
  }
  #navbar {
    display: flex;
    justify-content: space-around;
    background-color: rgb(203, 201, 199);
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;

    color: rgb(246, 246, 246);
  }

  li:hover {
    text-shadow: rgb(248, 175, 207) 1px 0 10px;
  }

  #cartContainer {
    display: flex;
  }

  #cart {
    width: 20px;
    height: 20px;
  }
</style>
