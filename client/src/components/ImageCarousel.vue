<template>
	<div class="carousel-content">
		<img v-bind:src="images[0]"/>
		<div class="controls">
			<carousel-control dir="left"></carousel-control>
			<carousel-control dir="right"></carousel-control>
		</div>
	</div>
</template>

<script>
	import CarouselControl from './CarouselControl'
	export default{
		data(){
			return {
				images: [
							"/static/images/14/Image_1.jpg",
							"/static/images/14/Image_2.jpg",
							"/static/images/14/Image_3.jpg",
							"/static/images/14/Image_4.jpg"
						]
				}
		},
		components:{
			CarouselControl
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