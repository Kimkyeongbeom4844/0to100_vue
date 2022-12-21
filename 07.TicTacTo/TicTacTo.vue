<script setup>
import { ref, onMounted, onUpdated } from "vue";
// defineProps({
//   프롭스1 : String,
//   프롭스2 : Number
// })
const count = ref(0);
const testRef = ref(null);
const tableData = ref([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
const change = () => {
  count.value++;
  tableData.value[0][2] = Math.floor(Math.random() * 10);
};
onMounted(() => console.log("componentDidMount"));
onUpdated(() => console.log("componentDidUpdate"));
</script>
<template>
  <h2 ref="testRef">카운트 : {{ count }}</h2>
  <h2>{{ tableData }}</h2>
  <button v-on:click="change">클릭</button>
</template>
<style scoped></style>
