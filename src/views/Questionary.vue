<template>
  <div id="questionary">
    <p>STEP2</p>
    <p>以下にお答えください</p>
    <div>
      <p>現在、生命保険に加入されていますか？</p>
      <input @click="preShow = !preShow" type="radio" id="yf" v-model="questionOne" value="はい" />
      <label for="yes">はい</label>
      <input @click="preShow = !preShow" type="radio" id="nf" v-model="questionOne" value="いいえ" />
      <label for="no">いいえ</label>
    </div>
    <transition name="fade">
      <div v-if="preShow">
        <p>現在入院中ですか。または,最近3ヵ月以内に医師の診察・検査の結果、入院、手術をすすめられたことはありますか</p>
        <input @click="postShow = !postShow" type="radio" id="ys" v-model="questionTwo" value="はい" />
        <label for="yes">はい</label>
        <input @click="postShow = !postShow" type="radio" id="ns" v-model="questionTwo" value="いいえ" />
        <label for="no">いいえ</label>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="postShow">
        <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <input type="radio" id="yt" v-model="questionThree" value="はい" />
        <label for="yes">はい</label>
        <input type="radio" id="nt" v-model="questionThree" value="いいえ" />
        <label for="no">いいえ</label>
      </div>
    </transition>
    <br />
    <button @click="toInformation()">前へ戻る</button>
    <button @click="toConsult()">次へ進む</button>
  </div>
</template>

<script>
export default {
  name: "questionary",
  data() {
    return {
      preShow: false,
      postShow: false
    };
  },
  methods: {
    toConsult() {
      this.$router.push("consult");
    },
    toInformation() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
