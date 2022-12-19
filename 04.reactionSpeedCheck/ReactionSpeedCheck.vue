<script>
export default {
  data() {
    return {
      message: "클릭해서 시작하세요.",
      react: "",
      timer: "",
      time: "",
    };
  },
  methods: {
    clickBox() {
      switch (this.$refs.boxRef.style.backgroundColor) {
        case "red":
          clearTimeout(this.timer);
          this.$refs.boxRef.style.backgroundColor = "green";
          this.message = "성급하게 눌럿네요";
          break;
        case "yellow":
          this.react = new Date() - this.time;
          this.$refs.boxRef.style.backgroundColor = "aqua";
          this.message = "클릭해서 시작하세요.";
          break;
        case "green":
          this.$refs.boxRef.style.backgroundColor = "aqua";
          this.message = "클릭해서 시작하세요.";
          break;
        default:
          this.$refs.boxRef.style.backgroundColor = "red";
          this.$refs.boxRef.style.color = "black";
          this.message = "기다리세요";
          this.timer = setTimeout(() => {
            this.$refs.boxRef.style.backgroundColor = "yellow";
            this.$refs.boxRef.style.color = "white";
            this.message = "클릭하세요";
            this.time = new Date();
          }, Math.floor(Math.random() * 7000));
          break;
      }
    },
    reset() {
      clearTimeout(this.timer);
      this.react = "";
      this.$refs.boxRef.style.backgroundColor = "aqua";
      this.message = "클릭해서 시작하세요.";
    },
  },
};
</script>
<template>
  <div class="box" v-on:click="clickBox" ref="boxRef">
    {{ message }}
  </div>
  <h2 v-if="react !== ''">평균시간 : {{ react }}ms</h2>
  <button v-on:click="reset">리셋</button>
</template>
<style>
.box {
  width: 500px;
  height: 500px;
  background-color: aqua;
  text-align: center;
  color: white;
}
</style>
