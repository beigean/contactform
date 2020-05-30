<template>
  <div id="page03">
    <p>STEP3</p>

    <Consultation/>

    <br />
    <button @click="toPrev()">前へ戻る</button>
    <button>次へ進む</button>
  </div>
</template>

<script>
import Consultation from './Consultation.vue'

export default {
  name: "page03",
  components: {
    Consultation,
  },
  methods: {
    toPrev() {
      this.$router.push("/02");
    }
  }
};
</script>
