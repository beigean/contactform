<template>
  <div id="birthday">
    <p>-生年月日-</p>
    <select v-model="year">
      <option v-for="y in 100" v-bind:value="y + 2020 - 100" :key="y">{{y + 2020 - 100}}</option>
    </select>
    <label for="year">年</label>

    <select v-model="month">
      <option v-for="m in 12" :key="m">{{m}}</option>
    </select>
    <label for="month">月</label>

    <select v-model="day">
      <option v-for="d in calculate_max_day()" :key="d">{{d}}</option>
    </select>
    <label for="day">日</label>
  </div>
</template>

<script>
  export default {
    name: "Birthday",
    data() {
      return {
        year: 0,
        month: 0,
        day: 0,
      };
    },
    methods: {
      calculate_max_day: function() {
        return new Date(this.year, this.month, 0).getDate();
      }
    },
  };
</script>