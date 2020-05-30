<template>
  <div id="birthday">
    <p>-生年月日-</p>
    <select v-model="year" v-on:change="calculate_max_day()">
      <option v-for="y in 100" v-bind:value="y + 2020 - 100" :key="y">{{y + 2020 - 100}}</option>
    </select>
    <label for="year">{{yearText}}</label>

    <select v-model="month" v-on:change="calculate_max_day()">
      <option v-for="m in 12" :key="m">{{m}}</option>
    </select>
    <label for="month">{{monthText}}</label>

    <select v-model="day">
      <option v-for="d in max_day" :key="d">{{d}}</option>
    </select>
    <label for="day">{{dayText}}</label>
  </div>
</template>

<script>
  export default {
    name: "Birthday",
    data() {
      return {
        yearText: "年",
        monthText: "月",
        dayText: "日",
        button: "次へ進む",
        year: 0,
        month: 0,
        day: 0,
        max_day: 31
      };
    },
    methods: {
      calculate_max_day: function() {
        this.max_day = new Date(this.year, this.month, 0).getDate();
      }
    },
  };
</script>