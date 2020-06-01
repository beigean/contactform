<template>
  <div id="sex">
    <p>お客様の情報を入力してください</p>
    <p>-性別-</p>
    <input type="radio" id="men" v-model="sex" value="男性" v-on:change="updateAnswer"/>
    <label for="men">男性</label>
    <input type="radio" id="woman" v-model="sex" value="女性" v-on:change="updateAnswer"/>
    <label for="woman">女性</label>
  </div>
</template>

<script>
export default {
  name: "Sex",
  data() {
    return {
      sex: "",
    };
  },
  props: ['onChange'],
  methods: {
    updateAnswer(event) {
      console.log(event);
      this.$store.dispatch('updateAnswers', {sex: event.target.value});
    }
  }
};
</script>
