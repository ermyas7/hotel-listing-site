<template>
	<div class="header">
	  	<div class="header-img" :style="headerStyle"></div>
	  	<button class="view-photos" @click="$emit('header-clicked')">View Photos</button>
    </div>
</template>

<script>
	export default{
		props: ['url'],
		computed:{
			headerStyle(){
				return 'background-image:url(' + this.url + ');'
			}
		},
		methods:{
			background(){
				
			}
		}
	}
</script>

<style>
	
</style>