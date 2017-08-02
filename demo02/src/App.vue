<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br />
    <div>
    	<button @click="goback()">后退</button>
    	<button @click="goPrev()">前进</button>
    	<button @click="goHome()">回到首页</button>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/new_file/qwe/123">new_file</router-link>
    <router-link to="/redirect">redirect</router-link>
    <router-link to="/xie/asd/456">xie</router-link>
    <router-link to="/qwe">qwe</router-link>
    <router-link to="/404">404</router-link>
    <transition name="fade" mode="out-in">
    	<router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
  	goback(){
  		this.$router.go(-1);
  	},
  	goPrev(){
  		this.$router.go(1)
  	},
  	goHome(){
  		this.$router.push("/")
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
