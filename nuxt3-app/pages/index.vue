<script setup>
import {usePagesStore} from "../stores/pages.js";
const pagesStore = usePagesStore();

// Trigger pages fetch if not already done
if (pagesStore.pages.length === 0) {
  await pagesStore.fetchPages();
}

const pagesData = pagesStore.pages;
const homePageData = computed(() => pagesStore.pages.find(page => page.urlSlug === ''));
</script>

<template>
  <div class="container">
    <h1>{{ homePageData?.title }}</h1>
    <div v-html="homePageData?.content"></div>

    <hr/>

    <h1>All pages:</h1>

    <ul>
      <li v-for="page in pagesData" :key="page.id">
        <nuxt-link :to="`/${page.urlSlug}`">{{ page.title }}</nuxt-link>
      </li>
    </ul>

  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 10px;
}
ul li{
  margin-bottom: 10px;
}
ul a {
  text-decoration: none;
  color: black;
  transition: color ease-in-out 0.3s;
}

ul a:hover {
  color: blue;
}
</style>
