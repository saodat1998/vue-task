import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/Home';
import ManagePage from '@/pages/ManagePage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/manage-page/:id?',
      name: 'ManagePage',
      component: ManagePage
    },
  ]
});
