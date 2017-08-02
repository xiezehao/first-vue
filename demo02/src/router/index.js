import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import new_file from '@/components/new_file'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
	mode:'history',//默认hash，url带有#号，history指url不带#号
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      alias:"/qwe"
    },{
      path: '/new_file/:name/:psd',
      name:"new_file",
      component: new_file,
      alias:'/xie/:name/:psd'
    },{
      path: '/redirect',
      redirect: "/"
    },{
    	path:'*',
    	component:error
    	
    }
  ]
})
