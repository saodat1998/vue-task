<template>
  <b-table striped hover :items="allPages" :fields="fields">
    <template v-slot:cell(actions)="{ item }">
      <div class="d-flex">
        <router-link :to="`/manage-page/${item.id}`" class="mr-2 btn btn-primary" @click.stop="deletePage(item.id)">
          Edit
        </router-link>
        <b-button size="sm" variant="danger" @click.stop="deletePage(item.id)">
          Delete
        </b-button>
      </div>
    </template>
  </b-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      fields: [
        {key: 'id', sortable: true},
        {key: 'title', sortable: true},
        {key: 'urlSlug', label: 'URL Slug', sortable: true},
        {key: 'metaKeywords', label: 'Meta Keywords', sortable: true},
        {
          key: 'actions',
          label: 'Actions',
          sortable: false,
          thAttr: {style: 'width: 10%;'},
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['allPages']),
  },
  methods: {
    ...mapActions(['fetchPages', 'deletePage']),
  },
  mounted() {
    this.fetchPages();
  }
};
</script>
