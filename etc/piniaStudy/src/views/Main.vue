<script setup>
import { useCounterStore } from "../stores/counter.js";
const store = useCounterStore();
console.log(store);
</script>
<template>
  <h1>hello world!</h1>
  일반 카운트
  <button @click="store.increment">+1</button>
  {{ store.count }}
  더블 카운트
  {{ store.doubleCount }}
</template>
