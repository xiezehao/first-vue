import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from "@/components/Hi"
import Hi01 from "@/components/Hi01"
import Hi02 from "@/components/Hi02"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path:'/hi',
    	name:Hi,
    	component: Hi,
    	children:[
    		{path:"/",component:Hi},
    		{path:"hi01",component:Hi01},
    		{path:"hi02",component:Hi02}
    	]
    }
  ]
})
