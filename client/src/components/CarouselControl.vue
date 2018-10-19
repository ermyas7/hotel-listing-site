<template>
	<i  v-bind:class="classes" @click="clicked"></i>
</template>

<script>
	export default{
		props: ['dir'],
		computed:{
			classes(){
				return 'carousel-control fas fa-chevron-' + this.dir 
				} 
		},
		methods:{
			clicked(){ 
				this.$emit("change-image", this.dir === "left"? -1 : 1)
			}
		}
	}
</script>

<style scoped>
	.carousel-control{
		font-size: 4rem;
		font-weight: 700;
		margin: 0 .5em;
		color: #fff;
		opacity: 0.85;	
		cursor: pointer;
	}

	@media (min-width: 744px) {
		 .carousel-control {
		 font-size: 3rem;
		 }
	}
</style>