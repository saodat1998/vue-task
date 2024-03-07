import axios from '@/api/axios';

const state = {
  pages: [],
};

const getters = {
  allPages: (state) => state.pages,
  homePage: state => state.pages.find(page => page.urlSlug === ''),
};

const actions = {
  fetchPages({ commit }) {
    axios.get('/pages')
      .then((response) => {
        commit('setPages', response.data);
      })
      .catch((error) => console.error('There was an error fetching the pages:', error));
  },
  deletePage({ commit }, id) {
    axios.delete(`/pages/${id}`)
      .then(() => {
        commit('removePage', id);
      })
      .catch((error) => console.error('There was an error deleting the page:', error));
  },
};

const mutations = {
  setPages: (state, pages) => (state.pages = pages),
  removePage: (state, id) => (state.pages = state.pages.filter(page => page.id !== id)),
  addPage(state, page) {
    state.pages.push(page);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
