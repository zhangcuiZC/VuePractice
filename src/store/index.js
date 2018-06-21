import Vue from "vue";
import Vuex from "vuex";
import about from "./modules/about";
import app from "./modules/app";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    about,
    app
  },
  strict: debug
});
