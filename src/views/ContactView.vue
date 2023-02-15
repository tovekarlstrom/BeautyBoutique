<script>
  export default {
    data() {
      return {
        name: null,
        text: null,
        formDatas: []
      }
    },
    methods: {
      addFormData(e) {
        e.preventDefault
        this.formDatas.push({
          name: this.name,
          text: this.text
        }),
          (this.name = ''),
          (this.text = '')
      }
    }
  }
</script>

<template>
  <main>
    <h1>Contact</h1>

    <ul>
      <li>Email: contact@beautyboutique.xxx</li>
      <li>Tel: 070 865 47 XX</li>
    </ul>
    <div id="formContainer">
      <div id="reviews">
        <h2>Reviews</h2>
        <ul v-if="name !== null">
          <li :key="formData.name" v-for="formData in formDatas">
            {{ formData.name }} - {{ formData.text }}
          </li>
        </ul>
      </div>
      <form id="formReview">
        <h3>Write a review</h3>
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          v-model="name"
          placeholder="Enter your name"
        />
        <label for="text">How was your experience?</label>
        <textarea id="text" v-model="text" cols="30" rows="5" />

        <button @click="addFormData" type="button" class="btn btn-dark">
          Add review
        </button>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  $bg-color: rgb(190, 169, 189);

  main {
    background-color: $bg-color;
    height: 70vh;
  }
  #formContainer {
    background-color: $bg-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
  }

  #formReview {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  #reviews {
    min-height: 300px;
  }

  #name,
  #text {
    background-color: rgb(235, 233, 233);
    box-shadow: rgba(115, 117, 119, 0.2) 0px 8px 24px;
    color: rgb(41, 40, 40);
    border-style: hidden;
  }
</style>
