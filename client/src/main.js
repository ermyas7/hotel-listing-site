import Vue from 'vue'
import listingService from '@/services/listingService'
import 'core-js/fn/object/assign'
import { populateAmenitiesAndPrices } from '../static/js/helpers'
import ImageCarousel from './components/ImageCarousel'
import ModalWindow from './components/ModalWindow'
import HeaderImage from './components/HeaderImage'
const app = new Vue({
	el: "#app",
	data:{
		model: [],
		contracted: true
	},
	components:{
		ImageCarousel,
		ModalWindow,
		HeaderImage
	},
	mounted(){
		this.getListing()
	},
	methods:{
		imageOpen(){
			this.$refs.imageModel.modelOpen = true;
		},
		async getListing(){
				const response = await listingService.fetchListing()
				this.model = response.data[3]
				this.model = populateAmenitiesAndPrices(this.model)
			}	
	}		
})

