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
  <div v-bind:style="{ backgroundColor: setColor }">
    {{ number ?? bonusNumber }}
  </div>
</template>
<style></style>
