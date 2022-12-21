<script>
export default {
  // props: ["number", "bonusNumber"],
  props: {
    number: Number,
    bonusNumber: Number,
  },
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
    };
  },
  computed: {
    setColor() {
      return this.randomColor[Math.floor(Math.random() * 6.999999)];
    },
  },
  mounted() {
    //componentDidMount
    console.log(this.number, this.bonusNumber);
  },
  updated() {
    console.log("componentDidUpdate");
  },
  beforeUnmount() {
    console.log("componentWillUnmount");
  },
};
</script>
<template>
  <div class="ball" v-bind:style="{ backgroundColor: setColor }">
    {{ number ?? bonusNumber }}
  </div>
</template>
<style>
.ball {
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
