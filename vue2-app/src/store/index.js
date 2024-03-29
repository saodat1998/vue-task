import Vue from 'vue';
import Vuex from 'vuex';
import pages from './modules/pages'; // Import the pages module

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pages,
  },
});
