<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>
<template>
  <button v-on:click="goHome">메인으로</button>
</template>
