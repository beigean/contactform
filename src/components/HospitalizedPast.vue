<template>
  <div id='hospitalized_past' v-if='isVisible'>
    <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
    <input @click="onClick" @change="onChange({hospitalized_past: hospitalized_past})" type="radio" id="yt" v-model="hospitalized_past" value="はい" />
    <label for="yes">はい</label>
    <input @click="onClick" @change="onChange({hospitalized_past: hospitalized_past})" type="radio" id="nt" v-model="hospitalized_past" value="いいえ" />
    <label for="no">いいえ</label>
  </div>
</template>

<script>
export default {
  name: "HospitalizedPast",
  data() {
    return{
      hospitalized_past: "",
    };
  },
  props: ['isVisible', 'onClick', 'onChange']
};
</script>
