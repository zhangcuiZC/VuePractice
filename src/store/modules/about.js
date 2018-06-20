export default {
  namespaced: true,
  state: {
    name: "zhangcui",
    color: "#eeeeee"
  },
  mutations: {
    updateColor(state, color) {
      state.color = color;
    }
  }
};
