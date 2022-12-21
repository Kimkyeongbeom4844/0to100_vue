<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
import { increment, setName } from "./store/store";
const store = useStore();
const inputRef = ref(null);
const count = ref(1);
console.log(1);
onMounted(() => console.log("componentDidMount"));
onUpdated(() => console.log(store.state.count));
const onBtnClick = () => {
  // store.state.count++;
  store.commit(increment);
  count.value++;
};
const saveName = (e) => {
  store.commit(setName, inputRef.value.value);
  inputRef.value.value = "";
};
</script>
<template>
  <h2>store count : {{ store.state.count }}</h2>
  <h2>ref count : {{ count }}</h2>
  <button v-on:click="onBtnClick">클릭</button>
  <hr />
  <form v-on:submit.prevent="saveName">
    <input required ref="inputRef" type="text" maxlength="" />
    <button type="submit">저장</button>
    <h2>{{ store.state.name }}</h2>
  </form>
</template>
<style scoped></style>
