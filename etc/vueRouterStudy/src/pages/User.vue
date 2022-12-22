<script setup>
import { useRoute } from "vue-router";
import Gomain from "../components/Gomain.vue";
const route = useRoute();
console.log(route.params);
</script>
<template>
  <h2>유저</h2>
  <h3>아이디 : {{ route.params.id }}</h3>
  <Gomain />
</template>
