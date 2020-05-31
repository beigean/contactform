<template>
  <div id="page03">
    <p>STEP3</p>

    <Consultation v-bind:onChange="update_answer"/>
    {{ answers.consultation }}

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
  props: ['answers', 'update_answer'],
  methods: {
    toPrev() {
      this.$router.push("/02");
    }
  }
};
</script>
