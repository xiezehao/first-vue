import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import new_file from '@/components/new_file'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/new_file/:name/:psd',
      name:"new_file",
      component: new_file
    }
  ]
})
