<template>
  <input type="text" :value="inputValue" @input="onChangeInput" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const emit = defineEmits(['custom-event'])

const onChangeInput = (e: InputEvent) => {
  const currentTarget = e.currentTarget as HTMLInputElement
  inputValue.value = currentTarget.value
  emit('custom-event', inputValue.value)
}
</script>

<style scoped></style>
