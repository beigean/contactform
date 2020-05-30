<template>
  <div id='hospitalized_now' v-if='isVisible'>
    <p>現在入院中ですか。または,最近3ヵ月以内に医師の診察・検査の結果、入院、手術をすすめられたことはありますか</p>
    <input @click="onClick" @change="onChange({hospitalized_now: hospitalized_now})" type="radio" id="ys" v-model="hospitalized_now" value="はい" />
    <label for="yes">はい</label>
    <input @click="onClick" @change="onChange({hospitalized_now: hospitalized_now})" type="radio" id="ns" v-model="hospitalized_now" value="いいえ" />
    <label for="no">いいえ</label>
  </div>
</template>

<script>
export default {
  name: "HospitalizedNow",
  data() {
    return{
      hospitalized_now: "",
    };
  },
  props: ['isVisible', 'onClick', 'onChange']
};
</script>
