<template>
	<div>
		{{msg}}
		<br />
		<p>{{$route.params.name}}</p>
		{{ $route.params.psd}}
	</div>
</template>

<script>
export default {
  name: 'new_file',
  data () {
    return {
      msg: 'new_file page'
    }
  },
  mounted(){
  	console.log("456")
  },
  beforeRouteEnter:(to,from,next)=>{
  	console.log(to);
  	console.log(from);
  	console.log(next);
  	next();
  },
  beforeRouteLeave:(to,from,next)=>{
  	console.log(to);
  	console.log(from);
  	next();
  }
}
</script>

<style>
</style>