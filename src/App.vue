<template>
    <div>
		<navbar></navbar>
		<br><br><br>
		<Advertise></Advertise>
  		<router-view></router-view>
  	 </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
	import Advertise from './components/advertise.vue'

  	  export default {
  		     data(){
  			        return{

  			        };
  		      },
  		      components:{
  			        Navbar,
					Advertise
  		      },
  		      computed: {
  		          toast() {
  		              return this.$store.getters.toast;
  		          }
  		      },
  		      methods: {
  		          hideToast() {
  		              this.$store.commit("hideToast");
  		          }
  		      }
 	    }
</script>

<style scoped>

</style>