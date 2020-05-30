<template>
  <div id='hospitalized_past' v-if='isVisible'>
    <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
    <!-- <input @click="onClick" type="radio" id="yt" v-model="questionThree" value="はい" /> -->
    <input @click="onClick" type="radio" id="yt" value="はい" />
    <label for="yes">はい</label>
    <!-- <input type="radio" id="nt" v-model="questionThree" value="いいえ" /> -->
    <input type="radio" id="nt" value="いいえ" />
    <label @click="onClick" for="no">いいえ</label>
  </div>
</template>

<script>
export default {
  name: "HospitalizedPast",
  props: ['isVisible', 'onClick']
};
</script>
