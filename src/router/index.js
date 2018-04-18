import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import Summery from '@/components/Summery'
import Console from '@/components/Console'
import Pool from '@/components/Pool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta:{
        bread: '概要',
      },
      component: Layout,
      children: [
        {
            path: 'summary',
            meta:{
              bread: '概要',
            },
            component: Summery
        },
        {
            path: 'resource/console',
            meta:{
              bread: '资源 / 主控管理',
            },
            component: Console
        },
        {
            path: 'resource/pool',
            meta:{
              bread: '资源 / 资源池管理',
            },
            component: Pool
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
