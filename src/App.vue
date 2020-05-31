<template>
  <div id="app">
    <router-view v-bind:answers="answers" v-bind:update_answer="updateAnswer"> </router-view>
  </div>
</template>

<script>
export default {
   name: "app",
   data() {
      return {
         answers: {
            sex: "",
            birthday: {
               year: 0,
               month: 0,
               day: 0,
            },
            insurance: "",
            hospitalized_now: "",
            hospitalized_past: "",
            consultation: "",
         },
      };
   },
   methods: {
      updateAnswer(updateObject) {
         this.answers = Object.assign({}, this.answers, updateObject);
      },
   },
};
</script>
