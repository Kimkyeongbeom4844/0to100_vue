<script>
let timer;
export default {
  data() {
    return {
      score: 0,
      message: "",
    };
  },
  methods: {
    changeHand() {
      switch (this.$refs.pictureRef.style.backgroundPositionX) {
        case "50%": //가위
          this.$refs.pictureRef.style.backgroundPositionX = "100%";
          break;
        case "100%": //보
          this.$refs.pictureRef.style.backgroundPositionX = "0%";
          break;
        default: //바위
          this.$refs.pictureRef.style.backgroundPositionX = "50%";
          break;
      }
    },
    clickBtn(choice) {
      if (timer !== null) {
        switch (this.$refs.pictureRef.style.backgroundPositionX) {
          case "50%": //가위
            switch (choice) {
              case "가위":
                this.message = "비겼습니다.";
                break;
              case "바위":
                this.message = "이겼습니다.";
                this.score++;
                break;
              case "보":
                this.message = "졌습니다.";
                this.score--;
                break;
            }
            break;
          case "100%": //보
            switch (choice) {
              case "가위":
                this.message = "이겼습니다.";
                this.score++;
                break;
              case "바위":
                this.message = "졌습니다.";
                this.score--;
                break;
              case "보":
                this.message = "비겼습니다.";
                break;
            }
            break;
          default: //바위
            switch (choice) {
              case "가위":
                this.message = "졌습니다.";
                this.score--;
                break;
              case "바위":
                this.message = "비겼습니다.";
                break;
              case "보":
                this.message = "이겼습니다.";
                this.score++;
                break;
            }
            break;
        }
        clearTimeout(timer);
        timer = null;
        setTimeout(() => {
          timer = setInterval(() => this.changeHand(), 100);
          this.message = "";
        }, 2000);
      }
    },
  },
  mounted() {
    timer = setInterval(() => this.changeHand(), 100);
  },
  updated() {
    console.log("업데이트 된 후 ");
  },
  computed: {},
};
</script>
<template>
  <div>
    <div ref="pictureRef" class="picture"></div>
  </div>
  <button v-on:click="clickBtn('가위')">가위</button>
  <button v-on:click="clickBtn('바위')">바위</button>
  <button v-on:click="clickBtn('보')">보</button>
  <h2>{{ message }}</h2>
  <h2>현재 : {{ score }}점</h2>
</template>
<style scoped>
.picture {
  width: 150px;
  height: 200px;
  background-image: url("https://en.pimg.jp/023/182/267/1/23182267.jpg");
  background-repeat: no-repeat;
  background-position-x: left;
}
</style>
