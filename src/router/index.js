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
      meta: {
        keepAlive: false // 不需要缓存
      },
      children:[
        {
          path: '/',
          name: 'index',
          component: Index,
          meta: {
            keepAlive: false // 不需要缓存
          }
        },
        {
          path: '/me',
          name: 'Me',
          component: Me,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/help',
          name: 'Help',
          component: Help,
          meta: {
            keepAlive: false // 不需要缓存
          }
        },
        {
          path: '/tools/one',
          name: 'One',
          component: One,
          meta: {
            keepAlive: false // 不需要缓存
          }
        },
        {
          path: '/tools/two',
          name: 'Two',
          component: Two,
          meta: {
            keepAlive: false // 不需要缓存
          }
        },
        {
          path: '/tools/three',
          name: 'Three',
          component: Three,
          meta: {
            keepAlive: false // 不需要缓存
          }
        }
      ]
    },

  ]
})
