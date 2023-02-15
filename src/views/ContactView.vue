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
      <li>Email: contact@beautyboutique.com</li>
      <li>Tel: 070 865 47 XX</li>
    </ul>
    <div id="formContainer">
      <div id="rewiews">
        <h2>Rewiews</h2>
        <ul v-if="name !== null">
          <li :key="formData.name" v-for="formData in formDatas">
            {{ formData.name }} - {{ formData.text }}
          </li>
        </ul>
      </div>
      <form id="formRewiew">
        <h3>Write a rewiew</h3>
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
          Add rewiew
        </button>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  $bg-color: rgb(190, 169, 189);

  main {
    background-color: $bg-color;
  }
  #formContainer {
    background-color: $bg-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
  }

  #formRewiew {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  #rewiews {
    min-height: 300px;
  }

  #name,
  #text {
    background-color: rgb(183, 178, 178);
    box-shadow: rgba(115, 117, 119, 0.2) 0px 8px 24px;
    color: white;
    border-style: hidden;
  }
</style>
