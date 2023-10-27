<template>
  <a>hello world</a>
  <p>{{ counterStore.count }}</p>
  <button type="button" @click="onClickIncrementButton">+</button>
  <div>자식에서 받은 값 : {{ inputValue }}</div>
  <div>자식에서 변경한 state : {{ count }}</div>
  <Children @custom-event="getEventFromChildren" :countPlus="countPlus" />
</template>

<script setup lang="ts">
import Children from '@/components/Children.vue'
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

const counterStore = useCounterStore()
const inputValue = ref('')
const count = ref(10)

const onClickIncrementButton = () => {
  counterStore.increment()
  console.log(import.meta.env.VITE_TEST ?? '없네요')
}
const getEventFromChildren = (data: string) => {
  inputValue.value = data
}
const countPlus = (data: number) => {
  alert(data)
  count.value += data
}
</script>

<style scoped></style>
