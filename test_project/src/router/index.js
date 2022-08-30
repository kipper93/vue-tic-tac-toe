import Vue from 'vue'
import Router from 'vue-router'
import testBox from '@/components/test-box'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testBox',
      component: testBox
    }
  ]
})
