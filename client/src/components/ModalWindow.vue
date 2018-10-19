<template>
	<div id="modal" v-bind:class="{show : modelOpen}">
  		<button @click="modelOpen = false" class="modal-close">
			&times;
		</button>
		<div class="modal-content">
			<slot></slot>
		</div>	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				modelOpen: false
			}
		},
		watch:{
			modelOpen: function(val){
				const className = "modal-open";
				if(this.modelOpen){
					document.body.classList.add(className);
				}
				else{
					document.body.classList.remove(className);
				}
		}
	},
	methods: {
		escapeKeyLitener(evt){
			if(evt.which === 27 && this.modelOpen){
				this.modelOpen = false;
			}
		}
	},	
	created:function(){
			document.addEventListener("keyup", this.escapeKeyLitener);
		},
	destroyed: function(){
			document.removeEventListener("keyup", this.escapeKeyLitener);
	}		
}
</script>

<style>
	#modal{
	  position: fixed;
	  display: none;
	  
	  top: 0;
	  left: 0;
	  bottom: 0;
	  right: 0;
	  z-index: 2000;
	  background-color: rgba(0,0,0,0.85);
}



#modal.show{
  display: block;
}

body.modal-open {
  overflow: hidden;
  /*position: fixed;*/
}

button.modal-close{
position: absolute;
top: 0;
right: 0;  
padding: 0px 28px 8px;
font-size: 4em;
width: auto;
height: auto;
background: transparent;
border: 0;
outline: none;
color: #ffffff;
z-index: 1000;
font-weight: 100;
line-height: 1;
}

.modal-content {
 	height: 100%;
 	max-width: 105vh;
	padding-top: 12vh;
	margin: 0 auto;
	position: relative;
 }
</style>