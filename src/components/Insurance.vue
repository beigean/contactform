<template>
  <div id="insurance" v-if='isVisible'>
    <p>現在、生命保険に加入されていますか？</p>
    <input @click='onClick' @change='onChange({insurance: insurance})' type="radio" id="yf" v-model="insurance" value="はい" />
    <label for="yes">はい</label>
    <input @click='onClick' @change='onChange({insurance: insurance})' type="radio" id="nf" v-model="insurance" value="いいえ" />
    <label for="no">いいえ</label>
  </div>
</template>

<script>
export default {
  name: "Insurance",
  data() {
    return {
      insurance: "",
    };
  },
  props: ['isVisible', 'onClick', 'onChange']
};
</script>
