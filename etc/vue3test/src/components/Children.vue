<template>
  <input type="number" :value="inputValue" @input="onChangeInput" />
  <button @click="() => props.countPlus(Number(inputValue))">부모 count 올리기</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref(0)
const emit = defineEmits(['custom-event'])
const props = defineProps({
  countPlus: Function
})

const onChangeInput = (e: InputEvent) => {
  const currentTarget = e.currentTarget as HTMLInputElement
  inputValue.value = Number(currentTarget.value)
  emit('custom-event', inputValue.value)
}
</script>

<style scoped></style>
