<template>
	<div>
		{{msg}}
		<br />
		<p>{{$route.new_file.name}}</p>
		{{ $route.new_file.psd}}
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
  	console.log()
  }
}
</script>

<style>
</style>