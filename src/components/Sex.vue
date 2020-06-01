<template>
  <div id="sex">
    <p>お客様の情報を入力してください</p>
    <p>-性別-</p>
    <input type="radio" id="men" v-model="sex" value="男性" />
    <label for="men">男性</label>
    <input type="radio" id="woman" v-model="sex" value="女性" />
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
};
</script>
