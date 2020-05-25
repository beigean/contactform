<template>
  <div id="information">
    <p>STEP1</p>
    <p>お客様の情報を入力してください</p>
    <p>-性別-</p>
    <input type="radio" id = "men" v-model="sex" value="男性"> 
    <label for="men">男性</label>
	<input type="radio" id = "woman" v-model="sex" value="女性"> 
    <label for="woman">女性</label>
    <p>-生年月日-</p>

<select name="select">
  <option value="select1">select1</option>
  <option value="select2">select2</option>
  <option value="select3">select3</option>
</select>
<hr>
<p>{{say}}</p>

  </div>
    

</template>

<script>

export default {
    data() {
        return {
             sex: "",
             message: 'hello'
        };
    },
    computed: {
        say() {
         return this.message;
        }
    }
}

</script>

