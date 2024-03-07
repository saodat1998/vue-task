<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.slug;
import { useHead } from 'nuxt/app';
import {usePagesStore} from "../../stores/pages.js";

const pagesStore = usePagesStore();

// Trigger pages fetch if not already done
if (pagesStore.pages.length === 0) {
  await pagesStore.fetchPages();
}

const pageData = computed(() => pagesStore.pages.find(page => page.urlSlug === slug));

watchEffect(() => {
  if (pageData.value) {
    useHead({
      title: pageData.value.title,
      meta: [
        { name: 'keywords', content: pageData.value.metaKeywords },
      ],
    });
  }
});
</script>

<template>
  <div class="container">
    <h1>{{ pageData?.title }}</h1>
    <div v-html="pageData?.content"></div>
  </div>
</template>

<style scoped>
.container{
  max-width: 1200px;
  margin: 0 auto;
}
h1{
  margin-bottom: 10px;
}
</style>
