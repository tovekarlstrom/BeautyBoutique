<script>
  export default {
    components: {}
  }
</script>

<template>
  <main>
    <div id="backgroundContainer">
      <h1 id="h1Home">
        Transform Your Look at Our Beauty Boutique - The Ultimate Destination
        for All Your Beauty Needs!
      </h1>
    </div>
    <div id="infoContainer">
      <h2>Beauty Boutique</h2>
      <p>
        Welcome to our makeup store, where beauty meets creativity. Our store
        offers a wide range of cosmetics and beauty products, from classic
        makeup staples to the latest trending shades and formulas. Whether you
        are a professional makeup artist or just looking to enhance your natural
        beauty, our store has something for everyone. Our knowledgeable and
        friendly staff are always on hand to offer advice and guidance on
        choosing the perfect products for your needs.
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  #h1Home {
    padding: 20px;
    color: rgb(91, 90, 90);
  }
  #backgroundContainer {
    height: 100vh;
    background-image: url(../../assets/beautyBlender.jpg);
    background-color: #f4efeb;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
  }
  #infoContainer {
    max-width: 700px;
    padding: 20px;
  }
</style>
