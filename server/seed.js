const mongoose = require("mongoose")
const List = require("./models/listing")
const data = require("./data.json")
//seed the database with existing data
const seeder = {};
 seeder.addAll = function(){
	data.forEach((singleData) => {
		for(let i = 1; i <= 4; i++){
			singleData["image" + "_" + i] = 
										"/static/images/"
										 + singleData.id
										  +"/Image_" + i + ".jpg"
		}
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
}	

seeder.removeAll = function(){
		List.remove({}, (err) => {
			if(err){
				console.log(err)
			}
			else{
				console.log("database cleaned")
			}
		})
}

module.exports = seeder;