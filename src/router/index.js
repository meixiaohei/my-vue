import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout';
import Index from '@/page/index';
import Help from '@/page/help';
import Me from '@/page/me';
import One from '@/page/tools/a';
import Two from '@/page/tools/b';
import Three from '@/page/tools/c';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Layout,
      children:[
        {
          path: '/',
          name: 'index',
          component: Index,
        },
        {
          path: '/me',
          name: 'Me',
          component: Me,
        },
        {
          path: '/help',
          name: 'Help',
          component: Help,
        },
        {
          path: '/tools/one',
          name: 'One',
          component: One,
        },
        {
          path: '/tools/two',
          name: 'Two',
          component: Two,
        },
        {
          path: '/tools/three',
          name: 'Three',
          component: Three,
        }
      ]
    },

  ]
})
