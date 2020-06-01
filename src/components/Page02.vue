<template>
  <div id="page02">
    <p>STEP2</p>
    <p>以下にお答えください</p>

    <!-- <div v-for='(item, index) in items' v-bind:key="item">
      <item.component v-bind:isVisible="item.isVisible" v-bind:onClick="onClickHandler(index)"/>
    </div> -->
    <Insurance v-bind:isVisible="items[0].isVisible" v-bind:onClick="() => onClickHandler(0)"/>
    <HospitalizedNow v-bind:isVisible="items[1].isVisible" v-bind:onClick="() => onClickHandler(1)"/>
    <HospitalizedPast v-bind:isVisible="items[2].isVisible" v-bind:onClick="() => onClickHandler(2)"/>

    <br />
    <button @click="toPrev()">前へ戻る</button>
    <button @click="toNext()">次へ進む</button>
  </div>
</template>

<script>
import Insurance from './Insurance.vue'
import HospitalizedNow from './HospitalizedNow.vue'
import HospitalizedPast from './HospitalizedPast.vue'

export default {
  name: "page02",
  components: {
    Insurance,
    HospitalizedNow,
    HospitalizedPast,
  },
  data() {
    return {
      items: [
        { component: Insurance, isVisible: true },
        { component: HospitalizedNow, isVisible: false },
        { component: HospitalizedPast, isVisible: false },
      ]
    };
  },
  methods: {
    toNext() {
      this.$router.push("/03");
    },
    toPrev() {
      this.$router.push("/01");
    },
    onClickHandler(index) {
      if (index < (3 - 1)) {
        this.items[index + 1].isVisible = true;
      }
    },
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
