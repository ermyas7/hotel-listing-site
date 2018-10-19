<template>
	<div class="carousel-content">
		<img v-bind:src="images[index]"/>
		<div class="controls">
			<carousel-control dir="left"  @change-image="changeImage"></carousel-control>
			<carousel-control dir="right" @change-image="changeImage" ></carousel-control>
		</div>
	</div>
</template>

<script>
	import CarouselControl from './CarouselControl'
	export default{
		props: ['images'],
		data(){
			return {
				index: 0		
				}
		},
		components:{
			CarouselControl
		},
		computed:{
			image(){
				return this.images[this.index]
			}
		},
		methods:{
			changeImage(val){
				let newVal = this.index + parseInt(val)
				if(newVal < 0 ){
					this.index = this.images.length - 1
				}
				else if(newVal === this.images.length){
					this.index = 0
				}
				else{
					this.index = newVal
				}
			}
		}
	}		
</script>

<style scoped>
	.carousel-content{
		  height: 100%;
		  max-width: 105vh;
		  margin-top: -12vh;
		  margin: 0 auto;
		  position: relative;
		  display: flex;
		 align-items: center;
		 justify-content: center;
	}
	.carousel-content img{
  		max-width: 100%;
		}
	.carousel-content .controls {	
		 position: absolute;
		 width: 100%;
		 display: flex;
		 justify-content: space-between;
		 }	
</style>