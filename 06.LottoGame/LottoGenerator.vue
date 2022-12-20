<script>
let timer;
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
      randomColor: [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "gray",
        "purple",
      ],
      numberList: [],
      bonusNumber: "",
    };
  },
  methods: {
    pickNumbers() {
      let count = 0;
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
};
</script>
<template>
  <h2>당첨 숫자</h2>
  <div class="numberList">
    <div v-for="i in numberList" v-bind:style="{ backgroundColor: setColor }">
      {{ i }}
    </div>
  </div>
  <h2>보너스!</h2>
  <div v-if="bonusNumber" class="numberList">
    <div v-bind:style="{ backgroundColor: setColor }">{{ bonusNumber }}</div>
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
