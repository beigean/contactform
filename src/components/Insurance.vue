<template>
  <div id="insurance" v-if='isVisible'>
    <p>現在、生命保険に加入されていますか？</p>
    <!-- <input @click='onClick' type="radio" id="yf" v-model="questionOne" value="はい" /> -->
    <input @click='onClick' type="radio" id="yf" value="はい" />
    <label for="yes">はい</label>
    <!-- <input @click='onClick' type="radio" id="nf" v-model="questionOne" value="いいえ" /> -->
    <input @click='onClick' type="radio" id="nf" value="いいえ" />
    <label for="no">いいえ</label>
  </div>
</template>

<script>
export default {
  name: "Insurance",
  props: ['isVisible', 'onClick']
};
</script>
