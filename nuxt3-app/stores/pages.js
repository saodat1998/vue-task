// stores/usePagesStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePagesStore = defineStore('pages', {
  state: () => ({
    pages: [],
  }),
  actions: {
    async fetchPages() {
      try {
        const response = await axios.get('http://localhost:3001/pages');
        this.pages = response.data;
      } catch (error) {
        console.error('There was an error fetching the pages:', error);
      }
    },
  }
});
