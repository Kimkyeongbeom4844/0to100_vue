import { createStore } from "vuex";

export const increment = "increment";
export const setName = "setName";

const store = createStore({
  state() {
    return {
      count: 0,
      name: "",
    };
  },
  mutations: {
    //state를 수정할 때 사용 (동기적으로)
    [increment](state) {
      state.count++;
    },
    [setName](state, data) {
      state.name = data;
    },
  },
  actions: {
    //비동기를 사용할 때, 또는 여러 mutation을 연달아 실행할 때
  },
  getters: {
    //computed와 비슷
  },
});

export default store;
