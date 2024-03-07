<template>
  <b-row>
    <b-col cols="12">
      <h1 class="mb-5">{{ $route.params.id ? 'Edit Page' : 'Create page' }}</h1>
      <b-form @submit.prevent="submitPost">
        <b-form-group label="Post Title:" label-for="page-title">
          <b-form-input id="page-title" v-model="page.title" required></b-form-input>
        </b-form-group>
        <b-form-group label="Post Url Slug:" label-for="page-url-slug">
          <b-form-input id="page-url-slug" v-model="formattedUrlSlug"></b-form-input>
        </b-form-group>
        <b-form-group label="Post Meta Keywords:" label-for="page-meta-keywords">
          <b-form-input id="page-meta-keywords" v-model="page.metaKeywords" required></b-form-input>
        </b-form-group>
        <b-form-group label="Post Content:" label-for="page-content">
          <tip-tap-editor :value="page.content" @input="page.content = $event"/>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import axios from '@/api/axios';
import TipTapEditor from "@/components/TipTapEditor";

export default {
  name: 'EditPage',
  components: {TipTapEditor},
  data() {
    return {
      page: {
        title: '',
        urlSlug: '',
        metaKeywords: '',
        content: '',
      }
    };
  },
  computed: {
    ...mapGetters(['homePage']),
    formattedUrlSlug: {
      get() {
        return this.page.urlSlug;
      },
      set(value) {
        this.page.urlSlug = this.formatter(value);
      }
    }
  },
  methods: {
    ...mapActions(['fetchPages']),
    fetchPage() {
      axios.get(`/pages/${this.$route.params.id}`)
          .then(({data}) => {
            this.page = data;
          })
          .catch(error => {
            console.error('There was an error fetching the pages:', error);
          });
    },
    formatter(title) {
      return title
          .toString()
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
    },
    submitPost() {
      let method = this.page.id ? 'patch' : 'post';
      let url = this.page.id ? `/pages/${this.page.id}` : '/pages';

      if(this.page.urlSlug === '' && this.homePage && this.homePage.id !== this.$route.params.id){
        alert('Home page already exists. Please a valid url slug')
        return
      }

      axios[method](url, this.page)
          .then(() => {
            this.$router.push({name: 'HomePage'});
          })
          .catch(error => {
            console.error('There was an error saving the page:', error);
          });
    },
    resetPage() {
      this.page = {
        title: '',
        urlSlug: '',
        metaKeywords: '',
        content: '',
      };
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fetchPage(newVal);
        } else {
          this.resetPage();
        }
      }
    }
  }
};
</script>
