import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: resolve => require(['../components/Detail.vue'], resolve),
      props: route => ({ query: route.query.detailId })
    }
  ]
})
