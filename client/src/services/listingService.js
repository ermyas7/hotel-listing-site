//for hitting the listing api

import Api from '@/services/Api'

export default{
	fetchListing(){
		return Api().get('/listing')
	},

	getListing(id){
		return Api().get('listing/'+id)
	}
}