import Vue from 'vue'
import listingService from '@/services/listingService'
import "core-js/fn/object/assign"
import { populateAmenitiesAndPrices } from "../static/js/helpers"
const app = new Vue({
	el: "#app",
	data:{
		model: [],
		headerImageStyle:{
			//'background-image': `url(/static/images/header.jpg)`
		},
		contracted: true,
		modelOpen: false
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
	mounted(){
		this.getListing()
	},
	methods: {
		escapeKeyLitener(evt){
			if(evt.which === 27 && this.modelOpen){
				this.modelOpen = false;
			}
		},
		async getListing(){
			const response = await listingService.fetchListing()
			this.model = response.data[13]
			this.model = populateAmenitiesAndPrices(this.model)
			this.headerImageStyle = 
			{'background-image': `url(${this.model.images[0]})`}
		}
	},
	created:function(){
			document.addEventListener("keyup", this.escapeKeyLitener);
		},
	destroyed: function(){
			document.removeEventListener("keyup", this.escapeKeyLitener);
	}	
})

