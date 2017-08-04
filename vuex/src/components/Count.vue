<template>
<div>
{{$store.state.count}}----{{count}}
<button @click="$store.commit('add',5)">+</button>
<button @click="reduce()">-</button>

</div>
</template>

<script>
import store from "@/vuex/store2"
import { mapState,mapMutations } from 'vuex';
export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  computed:{
  	count(){
  		return this.$store.state.count;
  	}
  },
  methods:mapMutations(['add','reduce']),
	store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>