<template>
  <div id="birthday">
    <p>-生年月日-</p>
    <select v-model="year" v-on:change="onChange({birthday: {year: year, month: month, day: day}})">
      <option v-for="y in 100" v-bind:value="y + 2020 - 100" :key="y">{{y + 2020 - 100}}</option>
    </select>
    <label for="year">年</label>

    <select v-model="month" v-on:change="onChange({birthday: {year: year, month: month, day: day}})">
      <option v-for="m in 12" :key="m">{{m}}</option>
    </select>
    <label for="month">月</label>

    <select v-model="day" v-on:change="onChange({birthday: {year: year, month: month, day: day}})">
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
    props: ['onChange'],
    methods: {
      calculate_max_day: function() {
        return new Date(this.year, this.month, 0).getDate();
      }
    },
  };
</script>