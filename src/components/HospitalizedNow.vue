<template>
  <div id='hospitalized_now' v-if='isVisible'>
    <p>現在入院中ですか。または,最近3ヵ月以内に医師の診察・検査の結果、入院、手術をすすめられたことはありますか</p>
    <!-- <input @click="onClick" type="radio" id="ys" v-model="questionTwo" value="はい" /> -->
    <input @click="onClick" type="radio" id="ys" value="はい" />
    <label for="yes">はい</label>
    <!-- <input @click="onClick" type="radio" id="ns" v-model="questionTwo" value="いいえ" /> -->
    <input @click="onClick" type="radio" id="ns" value="いいえ" />
    <label for="no">いいえ</label>
  </div>
</template>

<script>
export default {
  name: "HospitalizedNow",
  props: ['isVisible', 'onClick']
};
</script>
