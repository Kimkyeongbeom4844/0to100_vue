<script>
import LottoBall from "./LottoBall.vue";

let timer;
let count = 0;
const numberLogic = function () {
  let randomNumber;
  const s = new Set();
  while (s.size < 7) {
    randomNumber = Math.floor(Math.random() * 100);
    s.add(randomNumber);
  }
  return [...s];
};

export default {
  data() {
    return {
      numberList: [],
      bonusNumber: null,
    };
  },
  methods: {
    pickNumbers() {
      if (this.numberList.length < 6) {
        this.numberList.push(numberLogic()[count]);
        count++;
      } else if (this.numberList.length === 6) {
        this.bonusNumber = numberLogic()[count];
        clearInterval(timer);
      }
    },
    resetNumber() {
      this.numberList = [];
      this.bonusNumber = "";
      timer = setInterval(() => this.pickNumbers(), 1000);
      count = 0;
    },
  },
  computed: {
    setColor() {
      return this.randomColor[Math.floor(Math.random() * 6.999999)];
    },
  },
  mounted() {
    timer = setInterval(() => this.pickNumbers(), 1000);
  },
  components: {
    LottoBall,
  },
};
</script>
<template>
  <h2>당첨 숫자</h2>
  <div class="numberList">
    <LottoBall v-for="i in numberList" v-bind:number="i" />
  </div>
  <h2>보너스!</h2>
  <div v-if="bonusNumber" class="numberList">
    <LottoBall v-bind:bonusNumber="bonusNumber" />
    <button v-on:click="resetNumber">리셋!</button>
  </div>
</template>
<style scoped>
.numberList {
  display: flex;
}
.numberList > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  margin: 0 10px;
  font-size: 30px;
}
</style>
