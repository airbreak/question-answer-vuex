import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const home = resolve => require(['../page/home/index'], resolve)
const item = resolve => require(['../page/item/index'], resolve)
const score = resolve => require(['../page/score/index'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      children: [{
        path: '',
        component: home
      }, {
        path: '/item',
        component: item
      }, {
        path: '/score',
        component: score
      }]
    }
  ]
})
