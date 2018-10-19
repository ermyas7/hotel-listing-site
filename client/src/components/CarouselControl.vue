<template>
	<i  v-bind:class="className"></i>
</template>

<script>
	export default{
		props: ['dir'],
		data(){
			return{

			}
		},
		computed:{
			className(){
				return 'fas fa-chevron-' + this.dir 
				} 
		}
	}
</script>

<style scoped>
	.fas{
		font-size: 4rem;
		font-weight: 700;
		margin: 0 .5em;	
	}
</style>