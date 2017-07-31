<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:"this is hi"
			}
		}
	}
</script>

<style>
</style>