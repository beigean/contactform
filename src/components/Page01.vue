<template>
  <div id="page01">
    <p>STEP1</p>

    <Sex/>
    <Birthday/>

    <br />
    <button @click="toNext()">次へ進む</button>
  </div>
</template>

<script>
import Sex from './Sex.vue'
import Birthday from './Birthday.vue'

export default {
  name: "page01",
  components: {
    Sex,
    Birthday,
  },
  methods: {
    toNext() {
      this.$router.push("/02");
    },
  },
  // computed: {
  //   created() {
  //     return this.message;
  //   }
  // }
};
</script>
