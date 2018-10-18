const mongoose = require("mongoose")
const List = require("./models/listing")
const data = require("./data.json")
//seed the database with existing data

function seeder(){
	data.forEach((singleData) => {
		List.create(singleData, (err, list) => {
			if(err){
				console.log(err)
			}
			else{
				console.log("===========================")
				console.log(list)
				console.log("===========================")
			}
		})
	} )

	// List.remove({}, (err) => {
	// 	if(err){
	// 		console.log(err)
	// 	}
	// 	else{
	// 		console.log("database cleaned")
	// 	}
	// })
}

module.exports = seeder;