const express 	= 	require("express")
const List 		=	require("../models/listing")

const router = express.Router()
//get listing
router.get("/listing/:id", (req, res) => {
	List.find({id: req.params.id}, (err, list) => {
		if(err){
			console.log(err)
		}
		else{
			res.send(list)
		}
	})
})

//get all listing
router.get("/listing", (req, res) => {
	List.find({}, (err, lists) => {
		if(err){
			console.log(err)
		}
		else{
			res.send(lists)
		}
	}).sort({id: 1})
})

module.exports = router;