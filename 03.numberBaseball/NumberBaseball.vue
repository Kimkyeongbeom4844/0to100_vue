<script>
const randomNumber = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(number.splice(Math.floor(Math.random() * number.length - 1), 1));
  }
  return parseInt(arr.join(""));
};

export default {
  data() {
    return {
      value: "",
      tries: 0,
      question: randomNumber(),
      list: [],
    };
  },
  methods: {
    checkNumber(e) {
      console.log(`정답은 ${this.question}입니다.`);
      if (this.value === this.question) {
        alert("정답입니다. 게임을 다시 시작합니다.");
        this.question = randomNumber();
        this.list = [];
        this.tries = 0;
      } else {
        let strike = 0;
        let ball = 0;
        const question = this.question.toString().split("");
        const value = this.value.toString();
        for (let i in value) {
          if (question.includes(value[i])) {
            question[i] === value[i] ? strike++ : ball++;
          }
        }
        this.tries++;
        if (this.tries === 10) {
          alert("게임오버! 게임을 다시 시작합니다.");
          this.question = randomNumber();
          this.list = [];
          this.tries = 0;
        } else {
          this.list.push({ value: this.value, strike: strike, ball: ball });
        }
      }
      this.$refs.inputRef.focus();
      this.value = "";
    },
  },
};
</script>
<template>
  <form v-on:submit.prevent="checkNumber">
    <input
      ref="inputRef"
      required
      type="text"
      minlength="4"
      maxlength="4"
      v-model="value"
    />
    <button type="submit">입력!</button>
  </form>
  <h2>시도 : {{ tries }}</h2>
  <ul>
    <li v-for="i in list">
      {{ i.value }}<br />{{ i.strike }}스트라이크 {{ i.ball }}볼입니다.
    </li>
  </ul>
</template>
<style></style>
