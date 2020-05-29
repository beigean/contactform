<template>
  <div class="consult">
    <p>STEP3</p>
    <p>ご相談内容をご記入下さい</p>
    <p>-ご相談内容-</p>
    <form>
      <textarea name="textarea"></textarea>
    </form>
    <br />
    <button @click="toQuestionary()">前へ戻る</button>
    <button>次へ進む</button>
  </div>
</template>

<script>
export default {
  methods: {
    toQuestionary() {
      this.$router.push("questionary");
    }
  }
};
</script>

