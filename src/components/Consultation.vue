<template>
  <div id="consultation">
    <p>ご相談内容をご記入下さい</p>
    <p>-ご相談内容-</p>
    <form>
      <textarea @change="onChange({consultation: consultation})" v-model="consultation" name="textarea"></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "Consultation",
  data() {
    return {
      consultation: "",
    };
  },
  props: ['onChange'],
};
</script>
