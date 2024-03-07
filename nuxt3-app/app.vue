<script setup>
import {usePagesStore} from "./stores/pages.js";

const pagesStore = usePagesStore();

// Trigger pages fetch if not already done
if (pagesStore.pages.length === 0) {
  await pagesStore.fetchPages();
}

const pagesData = pagesStore.pages;
const headerPages = computed(() => pagesData.slice(0, 5));
</script>

<template>
  <header class="header">
    <div class="container nav">
      <nuxt-link class="logo" to="/">Home Page</nuxt-link>
      <ul>
        <li v-for="page in headerPages" :key="page.id">
          <nuxt-link :to="`/${page.urlSlug}`">{{ page.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
  <main class="container">
    <NuxtPage/>
  </main>
</template>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.header {
  margin-bottom: 40px;
  box-shadow: 0px 1px 20px 1px #00000026
}

.nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  text-decoration: none;
  color: blue;
}

.header ul {
  display: flex;
  gap: 16px;
  list-style: none;
}

.header ul a {
  text-decoration: none;
  color: black;
  transition: color ease-in-out 0.3s;
}

.header ul a:hover {
  color: blue;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 10px;
}
</style>
