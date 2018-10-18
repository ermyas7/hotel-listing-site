const mongoose 		= require("mongoose")
const morgan		= require("morgan")
const cors			= require("cors")
const bodyParser 	= require("body-parser")
const express		= require("express")
const List 			=	require("../models/listing")
const listingRouter = require("../api/listing")
const seedDB 		= require("../seed")
const app 			= express()
//config app
app.use(morgan("combined"))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+"/public"));
//config database
mongoose.connect("mongodb://localhost:27017/hotel_listing", {useNewUrlParser: true})
const db = mongoose.connection
db.on("err", () => console.log(err))
db.once("open", (cb) => console.log("successfully connected to the database!"))

//seed existing data
//seedDB()
//use routers
app.use("/", listingRouter);



app.listen(process.env.PORT||8081, () => console.log("server running!"))