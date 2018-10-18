const mongoose = require("mongoose")

const schema = mongoose.Schema
const listingSchema = schema({
	title: String,
	about: String,
	//aminities
	amenity_wifi: {
		type: Boolean,
		default: false
	},
	amenity_pets_allowed: {
		type: Boolean,
		default: false
	},
	amenity_tv: {
		type: Boolean,
		default: false
	},
	amenity_breakfast: {
		type: Boolean,
		default: false
	},
	amenity_kitchen: {
		type: Boolean,
		default: false
	},
	amenity_laptop: {
		type: Boolean,
		default: false
	},
	//prices
	price_per_night: {
		type: String,
		default: null
	},
	price_extra_people: {
		type: String,
		default: null
	},
	price_weekly_discount: {
		type: String,
		default: null
	},
	price_monthly_discount: {
		type: String,
		default: null
	}

})

const List = mongoose.model("List", listingSchema)

module.exports = List