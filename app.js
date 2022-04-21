require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const path= require("path")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const GoogleStrategy = require('passport-google-oauth20').Strategy
const findOrCreate= require("mongoose-findorcreate")
const cron = require('node-cron')
const sendgrid = require('@sendgrid/mail')
const flash = require('express-flash-messages')

const SENDGRID_API_KEY = process.env.SENDGRIDAPIKEY




const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, "public")))

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

const dbUrl= "mongodb+srv://admin-AbhimanyuG21:"+process.env.DBPASSWORD+"@cluster0.5amyo.mongodb.net/parkingAuthDB"
mongoose.connect(dbUrl || process.env.MONGODB_URI)

sendgrid.setApiKey(SENDGRID_API_KEY)

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  name: String,
  phone: String,
  address: String,
  numberPlate: String,
  feedback: [String]
})

// const siteInCities={
//   Delhi : ["Delhi-1","Delhi-2","Delhi-3","Delhi-4"],
//   Mumbai: ["Mumbai-1","Mumbai-2","Mumbai-3","Mumbai-4"],
//   Kolkata: ["Kolkata-1", "Kolkata-2", "Kolkata-3", "Kolkata-4"],
//   Chennai: ["Chennai-1", "Chennai-2", "Chennai-3", "Chennai-4"],
//   Bangalore: ["Bangalore-1", "Bangalore-2", "Bangalore-3","Bangalore-4"]
// }
const defaultSpaces=["a1","a2","a3","a4","a5","b1","b2","b3","b4","b5","c1","c2","c3","c4","c5","d1","d2","d3","d4","d5"]

const bookedSchema ={
  user: String,
  bookings:[
    {
      site:String,
      date: String,
      time: String,
      space_id: String
    },
  ]
}

const spacesAvailableSchema={
  siteEncoded: String,
  spaces: [String]
}

userSchema.plugin(passportLocalMongoose,{usernameField: "email"})

userSchema.plugin(findOrCreate)

const User = mongoose.model("User", userSchema)
const UserBooking = mongoose.model("UserBooking", bookedSchema)
const SpaceModel= mongoose.model("SpaceModel", spacesAvailableSchema)
passport.use(User.createStrategy())

//Populate DB-initialization
function fillDB(){
  //Delhi-A


  const CheA_01_10=new SpaceModel({siteEncoded: "Chennai-A_01_10am", spaces:defaultSpaces})
  CheA_01_10.save()
  const CheA_01_2p=new SpaceModel({siteEncoded: "Chennai-A_01_2pm", spaces:defaultSpaces})
  CheA_01_2p.save()
  const CheA_01_6p=new SpaceModel({siteEncoded: "Chennai-A_01_6pm", spaces:defaultSpaces})
  CheA_01_6p.save()
  const CheA_02_10=new SpaceModel({siteEncoded: "Chennai-A_02_10am", spaces:defaultSpaces})
  CheA_02_10.save()
  const CheA_02_2p=new SpaceModel({siteEncoded: "Chennai-A_02_2pm", spaces:defaultSpaces})
  CheA_02_2p.save()
  const CheA_02_6p=new SpaceModel({siteEncoded: "Chennai-A_02_6pm", spaces:defaultSpaces})
  CheA_02_6p.save()
  const CheA_03_10=new SpaceModel({siteEncoded: "Chennai-A_03_10am", spaces:defaultSpaces})
  CheA_03_10.save()
  const CheA_03_2p=new SpaceModel({siteEncoded: "Chennai-A_03_2pm", spaces:defaultSpaces})
  CheA_03_2p.save()
  const CheA_03_6p=new SpaceModel({siteEncoded: "Chennai-A_03_6pm", spaces:defaultSpaces})
  CheA_03_6p.save()
  const CheA_04_10=new SpaceModel({siteEncoded: "Chennai-A_04_10am", spaces:defaultSpaces})
  CheA_04_10.save()
  const CheA_04_2p=new SpaceModel({siteEncoded: "Chennai-A_04_2pm", spaces:defaultSpaces})
  CheA_04_2p.save()
  const CheA_04_6p=new SpaceModel({siteEncoded: "Chennai-A_04_6pm", spaces:defaultSpaces})
  CheA_04_6p.save()
  const CheA_05_10=new SpaceModel({siteEncoded: "Chennai-A_05_10am", spaces:defaultSpaces})
  CheA_05_10.save()
  const CheA_05_2p=new SpaceModel({siteEncoded: "Chennai-A_05_2pm", spaces:defaultSpaces})
  CheA_05_2p.save()
  const CheA_05_6p=new SpaceModel({siteEncoded: "Chennai-A_05_6pm", spaces:defaultSpaces})
  CheA_05_6p.save()
  const CheA_06_10=new SpaceModel({siteEncoded: "Chennai-A_06_10am", spaces:defaultSpaces})
  CheA_06_10.save()
  const CheA_06_2p=new SpaceModel({siteEncoded: "Chennai-A_06_2pm", spaces:defaultSpaces})
  CheA_06_2p.save()
  const CheA_06_6p=new SpaceModel({siteEncoded: "Chennai-A_06_6pm", spaces:defaultSpaces})
  CheA_06_6p.save()
  const CheA_07_10=new SpaceModel({siteEncoded: "Chennai-A_07_10am", spaces:defaultSpaces})
  CheA_07_10.save()
  const CheA_07_2p=new SpaceModel({siteEncoded: "Chennai-A_07_2pm", spaces:defaultSpaces})
  CheA_07_2p.save()
  const CheA_07_6p=new SpaceModel({siteEncoded: "Chennai-A_07_6pm", spaces:defaultSpaces})
  CheA_07_6p.save()
  const CheA_08_10=new SpaceModel({siteEncoded: "Chennai-A_08_10am", spaces:defaultSpaces})
  CheA_08_10.save()
  const CheA_08_2p=new SpaceModel({siteEncoded: "Chennai-A_08_2pm", spaces:defaultSpaces})
  CheA_08_2p.save()
  const CheA_08_6p=new SpaceModel({siteEncoded: "Chennai-A_08_6pm", spaces:defaultSpaces})
  CheA_08_6p.save()
  const CheA_09_10=new SpaceModel({siteEncoded: "Chennai-A_09_10am", spaces:defaultSpaces})
  CheA_09_10.save()
  const CheA_09_2p=new SpaceModel({siteEncoded: "Chennai-A_09_2pm", spaces:defaultSpaces})
  CheA_09_2p.save()
  const CheA_09_6p=new SpaceModel({siteEncoded: "Chennai-A_09_6pm", spaces:defaultSpaces})
  CheA_09_6p.save()
  const CheA_10_10=new SpaceModel({siteEncoded: "Chennai-A_10_10am", spaces:defaultSpaces})
  CheA_10_10.save()
  const CheA_10_2p=new SpaceModel({siteEncoded: "Chennai-A_10_2pm", spaces:defaultSpaces})
  CheA_10_2p.save()
  const CheA_10_6p=new SpaceModel({siteEncoded: "Chennai-A_10_6pm", spaces:defaultSpaces})
  CheA_10_6p.save()
  const CheA_11_10=new SpaceModel({siteEncoded: "Chennai-A_11_10am", spaces:defaultSpaces})
  CheA_11_10.save()
  const CheA_11_2p=new SpaceModel({siteEncoded: "Chennai-A_11_2pm", spaces:defaultSpaces})
  CheA_11_2p.save()
  const CheA_11_6p=new SpaceModel({siteEncoded: "Chennai-A_11_6pm", spaces:defaultSpaces})
  CheA_11_6p.save()
  const CheA_12_10=new SpaceModel({siteEncoded: "Chennai-A_12_10am", spaces:defaultSpaces})
  CheA_12_10.save()
  const CheA_12_2p=new SpaceModel({siteEncoded: "Chennai-A_12_2pm", spaces:defaultSpaces})
  CheA_12_2p.save()
  const CheA_12_6p=new SpaceModel({siteEncoded: "Chennai-A_12_6pm", spaces:defaultSpaces})
  CheA_12_6p.save()
  const CheA_13_10=new SpaceModel({siteEncoded: "Chennai-A_13_10am", spaces:defaultSpaces})
  CheA_13_10.save()
  const CheA_13_2p=new SpaceModel({siteEncoded: "Chennai-A_13_2pm", spaces:defaultSpaces})
  CheA_13_2p.save()
  const CheA_13_6p=new SpaceModel({siteEncoded: "Chennai-A_13_6pm", spaces:defaultSpaces})
  CheA_13_6p.save()
  const CheA_14_10=new SpaceModel({siteEncoded: "Chennai-A_14_10am", spaces:defaultSpaces})
  CheA_14_10.save()
  const CheA_14_2p=new SpaceModel({siteEncoded: "Chennai-A_14_2pm", spaces:defaultSpaces})
  CheA_14_2p.save()
  const CheA_14_6p=new SpaceModel({siteEncoded: "Chennai-A_14_6pm", spaces:defaultSpaces})
  CheA_14_6p.save()
  const CheA_15_10=new SpaceModel({siteEncoded: "Chennai-A_15_10am", spaces:defaultSpaces})
  CheA_15_10.save()
  const CheA_15_2p=new SpaceModel({siteEncoded: "Chennai-A_15_2pm", spaces:defaultSpaces})
  CheA_15_2p.save()
  const CheA_15_6p=new SpaceModel({siteEncoded: "Chennai-A_15_6pm", spaces:defaultSpaces})
  CheA_15_6p.save()
  const CheA_16_10=new SpaceModel({siteEncoded: "Chennai-A_16_10am", spaces:defaultSpaces})
  CheA_16_10.save()
  const CheA_16_2p=new SpaceModel({siteEncoded: "Chennai-A_16_2pm", spaces:defaultSpaces})
  CheA_16_2p.save()
  const CheA_16_6p=new SpaceModel({siteEncoded: "Chennai-A_16_6pm", spaces:defaultSpaces})
  CheA_16_6p.save()
  const CheA_17_10=new SpaceModel({siteEncoded: "Chennai-A_17_10am", spaces:defaultSpaces})
  CheA_17_10.save()
  const CheA_17_2p=new SpaceModel({siteEncoded: "Chennai-A_17_2pm", spaces:defaultSpaces})
  CheA_17_2p.save()
  const CheA_17_6p=new SpaceModel({siteEncoded: "Chennai-A_17_6pm", spaces:defaultSpaces})
  CheA_17_6p.save()
  const CheA_18_10=new SpaceModel({siteEncoded: "Chennai-A_18_10am", spaces:defaultSpaces})
  CheA_18_10.save()
  const CheA_18_2p=new SpaceModel({siteEncoded: "Chennai-A_18_2pm", spaces:defaultSpaces})
  CheA_18_2p.save()
  const CheA_18_6p=new SpaceModel({siteEncoded: "Chennai-A_18_6pm", spaces:defaultSpaces})
  CheA_18_6p.save()
  const CheA_19_10=new SpaceModel({siteEncoded: "Chennai-A_19_10am", spaces:defaultSpaces})
  CheA_19_10.save()
  const CheA_19_2p=new SpaceModel({siteEncoded: "Chennai-A_19_2pm", spaces:defaultSpaces})
  CheA_19_2p.save()
  const CheA_19_6p=new SpaceModel({siteEncoded: "Chennai-A_19_6pm", spaces:defaultSpaces})
  CheA_19_6p.save()
  const CheA_20_10=new SpaceModel({siteEncoded: "Chennai-A_20_10am", spaces:defaultSpaces})
  CheA_20_10.save()
  const CheA_20_2p=new SpaceModel({siteEncoded: "Chennai-A_20_2pm", spaces:defaultSpaces})
  CheA_20_2p.save()
  const CheA_20_6p=new SpaceModel({siteEncoded: "Chennai-A_20_6pm", spaces:defaultSpaces})
  CheA_20_6p.save()
  const CheA_21_10=new SpaceModel({siteEncoded: "Chennai-A_21_10am", spaces:defaultSpaces})
  CheA_21_10.save()
  const CheA_21_2p=new SpaceModel({siteEncoded: "Chennai-A_21_2pm", spaces:defaultSpaces})
  CheA_21_2p.save()
  const CheA_21_6p=new SpaceModel({siteEncoded: "Chennai-A_21_6pm", spaces:defaultSpaces})
  CheA_21_6p.save()
  const CheA_22_10=new SpaceModel({siteEncoded: "Chennai-A_22_10am", spaces:defaultSpaces})
  CheA_22_10.save()
  const CheA_22_2p=new SpaceModel({siteEncoded: "Chennai-A_22_2pm", spaces:defaultSpaces})
  CheA_22_2p.save()
  const CheA_22_6p=new SpaceModel({siteEncoded: "Chennai-A_22_6pm", spaces:defaultSpaces})
  CheA_22_6p.save()
  const CheA_23_10=new SpaceModel({siteEncoded: "Chennai-A_23_10am", spaces:defaultSpaces})
  CheA_23_10.save()
  const CheA_23_2p=new SpaceModel({siteEncoded: "Chennai-A_23_2pm", spaces:defaultSpaces})
  CheA_23_2p.save()
  const CheA_23_6p=new SpaceModel({siteEncoded: "Chennai-A_23_6pm", spaces:defaultSpaces})
  CheA_23_6p.save()
  const CheA_24_10=new SpaceModel({siteEncoded: "Chennai-A_24_10am", spaces:defaultSpaces})
  CheA_24_10.save()
  const CheA_24_2p=new SpaceModel({siteEncoded: "Chennai-A_24_2pm", spaces:defaultSpaces})
  CheA_24_2p.save()
  const CheA_24_6p=new SpaceModel({siteEncoded: "Chennai-A_24_6pm", spaces:defaultSpaces})
  CheA_24_6p.save()
  const CheA_25_10=new SpaceModel({siteEncoded: "Chennai-A_25_10am", spaces:defaultSpaces})
  CheA_25_10.save()
  const CheA_25_2p=new SpaceModel({siteEncoded: "Chennai-A_25_2pm", spaces:defaultSpaces})
  CheA_25_2p.save()
  const CheA_25_6p=new SpaceModel({siteEncoded: "Chennai-A_25_6pm", spaces:defaultSpaces})
  CheA_25_6p.save()
  const CheA_26_10=new SpaceModel({siteEncoded: "Chennai-A_26_10am", spaces:defaultSpaces})
  CheA_26_10.save()
  const CheA_26_2p=new SpaceModel({siteEncoded: "Chennai-A_26_2pm", spaces:defaultSpaces})
  CheA_26_2p.save()
  const CheA_26_6p=new SpaceModel({siteEncoded: "Chennai-A_26_6pm", spaces:defaultSpaces})
  CheA_26_6p.save()
  const CheA_27_10=new SpaceModel({siteEncoded: "Chennai-A_27_10am", spaces:defaultSpaces})
  CheA_27_10.save()
  const CheA_27_2p=new SpaceModel({siteEncoded: "Chennai-A_27_2pm", spaces:defaultSpaces})
  CheA_27_2p.save()
  const CheA_27_6p=new SpaceModel({siteEncoded: "Chennai-A_27_6pm", spaces:defaultSpaces})
  CheA_27_6p.save()
  const CheA_28_10=new SpaceModel({siteEncoded: "Chennai-A_28_10am", spaces:defaultSpaces})
  CheA_28_10.save()
  const CheA_28_2p=new SpaceModel({siteEncoded: "Chennai-A_28_2pm", spaces:defaultSpaces})
  CheA_28_2p.save()
  const CheA_28_6p=new SpaceModel({siteEncoded: "Chennai-A_28_6pm", spaces:defaultSpaces})
  CheA_28_6p.save()
  const CheA_29_10=new SpaceModel({siteEncoded: "Chennai-A_29_10am", spaces:defaultSpaces})
  CheA_29_10.save()
  const CheA_29_2p=new SpaceModel({siteEncoded: "Chennai-A_29_2pm", spaces:defaultSpaces})
  CheA_29_2p.save()
  const CheA_29_6p=new SpaceModel({siteEncoded: "Chennai-A_29_6pm", spaces:defaultSpaces})
  CheA_29_6p.save()
  const CheA_30_10=new SpaceModel({siteEncoded: "Chennai-A_30_10am", spaces:defaultSpaces})
  CheA_30_10.save()
  const CheA_30_2p=new SpaceModel({siteEncoded: "Chennai-A_30_2pm", spaces:defaultSpaces})
  CheA_30_2p.save()
  const CheA_30_6p=new SpaceModel({siteEncoded: "Chennai-A_30_6pm", spaces:defaultSpaces})
  CheA_30_6p.save()
  const CheA_31_10=new SpaceModel({siteEncoded: "Chennai-A_31_10am", spaces:defaultSpaces})
  CheA_31_10.save()
  const CheA_31_2p=new SpaceModel({siteEncoded: "Chennai-A_31_2pm", spaces:defaultSpaces})
  CheA_31_2p.save()
  const CheA_31_6p=new SpaceModel({siteEncoded: "Chennai-A_31_6pm", spaces:defaultSpaces})
  CheA_31_6p.save()
  //Chennai-B
  const CheB_01_10=new SpaceModel({siteEncoded: "Chennai-B_01_10am", spaces:defaultSpaces})
  CheB_01_10.save()
  const CheB_01_2p=new SpaceModel({siteEncoded: "Chennai-B_01_2pm", spaces:defaultSpaces})
  CheB_01_2p.save()
  const CheB_01_6p=new SpaceModel({siteEncoded: "Chennai-B_01_6pm", spaces:defaultSpaces})
  CheB_01_6p.save()
  const CheB_02_10=new SpaceModel({siteEncoded: "Chennai-B_02_10am", spaces:defaultSpaces})
  CheB_02_10.save()
  const CheB_02_2p=new SpaceModel({siteEncoded: "Chennai-B_02_2pm", spaces:defaultSpaces})
  CheB_02_2p.save()
  const CheB_02_6p=new SpaceModel({siteEncoded: "Chennai-B_02_6pm", spaces:defaultSpaces})
  CheB_02_6p.save()
  const CheB_03_10=new SpaceModel({siteEncoded: "Chennai-B_03_10am", spaces:defaultSpaces})
  CheB_03_10.save()
  const CheB_03_2p=new SpaceModel({siteEncoded: "Chennai-B_03_2pm", spaces:defaultSpaces})
  CheB_03_2p.save()
  const CheB_03_6p=new SpaceModel({siteEncoded: "Chennai-B_03_6pm", spaces:defaultSpaces})
  CheB_03_6p.save()
  const CheB_04_10=new SpaceModel({siteEncoded: "Chennai-B_04_10am", spaces:defaultSpaces})
  CheB_04_10.save()
  const CheB_04_2p=new SpaceModel({siteEncoded: "Chennai-B_04_2pm", spaces:defaultSpaces})
  CheB_04_2p.save()
  const CheB_04_6p=new SpaceModel({siteEncoded: "Chennai-B_04_6pm", spaces:defaultSpaces})
  CheB_04_6p.save()
  const CheB_05_10=new SpaceModel({siteEncoded: "Chennai-B_05_10am", spaces:defaultSpaces})
  CheB_05_10.save()
  const CheB_05_2p=new SpaceModel({siteEncoded: "Chennai-B_05_2pm", spaces:defaultSpaces})
  CheB_05_2p.save()
  const CheB_05_6p=new SpaceModel({siteEncoded: "Chennai-B_05_6pm", spaces:defaultSpaces})
  CheB_05_6p.save()
  const CheB_06_10=new SpaceModel({siteEncoded: "Chennai-B_06_10am", spaces:defaultSpaces})
  CheB_06_10.save()
  const CheB_06_2p=new SpaceModel({siteEncoded: "Chennai-B_06_2pm", spaces:defaultSpaces})
  CheB_06_2p.save()
  const CheB_06_6p=new SpaceModel({siteEncoded: "Chennai-B_06_6pm", spaces:defaultSpaces})
  CheB_06_6p.save()
  const CheB_07_10=new SpaceModel({siteEncoded: "Chennai-B_07_10am", spaces:defaultSpaces})
  CheB_07_10.save()
  const CheB_07_2p=new SpaceModel({siteEncoded: "Chennai-B_07_2pm", spaces:defaultSpaces})
  CheB_07_2p.save()
  const CheB_07_6p=new SpaceModel({siteEncoded: "Chennai-B_07_6pm", spaces:defaultSpaces})
  CheB_07_6p.save()
  const CheB_08_10=new SpaceModel({siteEncoded: "Chennai-B_08_10am", spaces:defaultSpaces})
  CheB_08_10.save()
  const CheB_08_2p=new SpaceModel({siteEncoded: "Chennai-B_08_2pm", spaces:defaultSpaces})
  CheB_08_2p.save()
  const CheB_08_6p=new SpaceModel({siteEncoded: "Chennai-B_08_6pm", spaces:defaultSpaces})
  CheB_08_6p.save()
  const CheB_09_10=new SpaceModel({siteEncoded: "Chennai-B_09_10am", spaces:defaultSpaces})
  CheB_09_10.save()
  const CheB_09_2p=new SpaceModel({siteEncoded: "Chennai-B_09_2pm", spaces:defaultSpaces})
  CheB_09_2p.save()
  const CheB_09_6p=new SpaceModel({siteEncoded: "Chennai-B_09_6pm", spaces:defaultSpaces})
  CheB_09_6p.save()
  const CheB_10_10=new SpaceModel({siteEncoded: "Chennai-B_10_10am", spaces:defaultSpaces})
  CheB_10_10.save()
  const CheB_10_2p=new SpaceModel({siteEncoded: "Chennai-B_10_2pm", spaces:defaultSpaces})
  CheB_10_2p.save()
  const CheB_10_6p=new SpaceModel({siteEncoded: "Chennai-B_10_6pm", spaces:defaultSpaces})
  CheB_10_6p.save()
  const CheB_11_10=new SpaceModel({siteEncoded: "Chennai-B_11_10am", spaces:defaultSpaces})
  CheB_11_10.save()
  const CheB_11_2p=new SpaceModel({siteEncoded: "Chennai-B_11_2pm", spaces:defaultSpaces})
  CheB_11_2p.save()
  const CheB_11_6p=new SpaceModel({siteEncoded: "Chennai-B_11_6pm", spaces:defaultSpaces})
  CheB_11_6p.save()
  const CheB_12_10=new SpaceModel({siteEncoded: "Chennai-B_12_10am", spaces:defaultSpaces})
  CheB_12_10.save()
  const CheB_12_2p=new SpaceModel({siteEncoded: "Chennai-B_12_2pm", spaces:defaultSpaces})
  CheB_12_2p.save()
  const CheB_12_6p=new SpaceModel({siteEncoded: "Chennai-B_12_6pm", spaces:defaultSpaces})
  CheB_12_6p.save()
  const CheB_13_10=new SpaceModel({siteEncoded: "Chennai-B_13_10am", spaces:defaultSpaces})
  CheB_13_10.save()
  const CheB_13_2p=new SpaceModel({siteEncoded: "Chennai-B_13_2pm", spaces:defaultSpaces})
  CheB_13_2p.save()
  const CheB_13_6p=new SpaceModel({siteEncoded: "Chennai-B_13_6pm", spaces:defaultSpaces})
  CheB_13_6p.save()
  const CheB_14_10=new SpaceModel({siteEncoded: "Chennai-B_14_10am", spaces:defaultSpaces})
  CheB_14_10.save()
  const CheB_14_2p=new SpaceModel({siteEncoded: "Chennai-B_14_2pm", spaces:defaultSpaces})
  CheB_14_2p.save()
  const CheB_14_6p=new SpaceModel({siteEncoded: "Chennai-B_14_6pm", spaces:defaultSpaces})
  CheB_14_6p.save()
  const CheB_15_10=new SpaceModel({siteEncoded: "Chennai-B_15_10am", spaces:defaultSpaces})
  CheB_15_10.save()
  const CheB_15_2p=new SpaceModel({siteEncoded: "Chennai-B_15_2pm", spaces:defaultSpaces})
  CheB_15_2p.save()
  const CheB_15_6p=new SpaceModel({siteEncoded: "Chennai-B_15_6pm", spaces:defaultSpaces})
  CheB_15_6p.save()
  const CheB_16_10=new SpaceModel({siteEncoded: "Chennai-B_16_10am", spaces:defaultSpaces})
  CheB_16_10.save()
  const CheB_16_2p=new SpaceModel({siteEncoded: "Chennai-B_16_2pm", spaces:defaultSpaces})
  CheB_16_2p.save()
  const CheB_16_6p=new SpaceModel({siteEncoded: "Chennai-B_16_6pm", spaces:defaultSpaces})
  CheB_16_6p.save()
  const CheB_17_10=new SpaceModel({siteEncoded: "Chennai-B_17_10am", spaces:defaultSpaces})
  CheB_17_10.save()
  const CheB_17_2p=new SpaceModel({siteEncoded: "Chennai-B_17_2pm", spaces:defaultSpaces})
  CheB_17_2p.save()
  const CheB_17_6p=new SpaceModel({siteEncoded: "Chennai-B_17_6pm", spaces:defaultSpaces})
  CheB_17_6p.save()
  const CheB_18_10=new SpaceModel({siteEncoded: "Chennai-B_18_10am", spaces:defaultSpaces})
  CheB_18_10.save()
  const CheB_18_2p=new SpaceModel({siteEncoded: "Chennai-B_18_2pm", spaces:defaultSpaces})
  CheB_18_2p.save()
  const CheB_18_6p=new SpaceModel({siteEncoded: "Chennai-B_18_6pm", spaces:defaultSpaces})
  CheB_18_6p.save()
  const CheB_19_10=new SpaceModel({siteEncoded: "Chennai-B_19_10am", spaces:defaultSpaces})
  CheB_19_10.save()
  const CheB_19_2p=new SpaceModel({siteEncoded: "Chennai-B_19_2pm", spaces:defaultSpaces})
  CheB_19_2p.save()
  const CheB_19_6p=new SpaceModel({siteEncoded: "Chennai-B_19_6pm", spaces:defaultSpaces})
  CheB_19_6p.save()
  const CheB_20_10=new SpaceModel({siteEncoded: "Chennai-B_20_10am", spaces:defaultSpaces})
  CheB_20_10.save()
  const CheB_20_2p=new SpaceModel({siteEncoded: "Chennai-B_20_2pm", spaces:defaultSpaces})
  CheB_20_2p.save()
  const CheB_20_6p=new SpaceModel({siteEncoded: "Chennai-B_20_6pm", spaces:defaultSpaces})
  CheB_20_6p.save()
  const CheB_21_10=new SpaceModel({siteEncoded: "Chennai-B_21_10am", spaces:defaultSpaces})
  CheB_21_10.save()
  const CheB_21_2p=new SpaceModel({siteEncoded: "Chennai-B_21_2pm", spaces:defaultSpaces})
  CheB_21_2p.save()
  const CheB_21_6p=new SpaceModel({siteEncoded: "Chennai-B_21_6pm", spaces:defaultSpaces})
  CheB_21_6p.save()
  const CheB_22_10=new SpaceModel({siteEncoded: "Chennai-B_22_10am", spaces:defaultSpaces})
  CheB_22_10.save()
  const CheB_22_2p=new SpaceModel({siteEncoded: "Chennai-B_22_2pm", spaces:defaultSpaces})
  CheB_22_2p.save()
  const CheB_22_6p=new SpaceModel({siteEncoded: "Chennai-B_22_6pm", spaces:defaultSpaces})
  CheB_22_6p.save()
  const CheB_23_10=new SpaceModel({siteEncoded: "Chennai-B_23_10am", spaces:defaultSpaces})
  CheB_23_10.save()
  const CheB_23_2p=new SpaceModel({siteEncoded: "Chennai-B_23_2pm", spaces:defaultSpaces})
  CheB_23_2p.save()
  const CheB_23_6p=new SpaceModel({siteEncoded: "Chennai-B_23_6pm", spaces:defaultSpaces})
  CheB_23_6p.save()
  const CheB_24_10=new SpaceModel({siteEncoded: "Chennai-B_24_10am", spaces:defaultSpaces})
  CheB_24_10.save()
  const CheB_24_2p=new SpaceModel({siteEncoded: "Chennai-B_24_2pm", spaces:defaultSpaces})
  CheB_24_2p.save()
  const CheB_24_6p=new SpaceModel({siteEncoded: "Chennai-B_24_6pm", spaces:defaultSpaces})
  CheB_24_6p.save()
  const CheB_25_10=new SpaceModel({siteEncoded: "Chennai-B_25_10am", spaces:defaultSpaces})
  CheB_25_10.save()
  const CheB_25_2p=new SpaceModel({siteEncoded: "Chennai-B_25_2pm", spaces:defaultSpaces})
  CheB_25_2p.save()
  const CheB_25_6p=new SpaceModel({siteEncoded: "Chennai-B_25_6pm", spaces:defaultSpaces})
  CheB_25_6p.save()
  const CheB_26_10=new SpaceModel({siteEncoded: "Chennai-B_26_10am", spaces:defaultSpaces})
  CheB_26_10.save()
  const CheB_26_2p=new SpaceModel({siteEncoded: "Chennai-B_26_2pm", spaces:defaultSpaces})
  CheB_26_2p.save()
  const CheB_26_6p=new SpaceModel({siteEncoded: "Chennai-B_26_6pm", spaces:defaultSpaces})
  CheB_26_6p.save()
  const CheB_27_10=new SpaceModel({siteEncoded: "Chennai-B_27_10am", spaces:defaultSpaces})
  CheB_27_10.save()
  const CheB_27_2p=new SpaceModel({siteEncoded: "Chennai-B_27_2pm", spaces:defaultSpaces})
  CheB_27_2p.save()
  const CheB_27_6p=new SpaceModel({siteEncoded: "Chennai-B_27_6pm", spaces:defaultSpaces})
  CheB_27_6p.save()
  const CheB_28_10=new SpaceModel({siteEncoded: "Chennai-B_28_10am", spaces:defaultSpaces})
  CheB_28_10.save()
  const CheB_28_2p=new SpaceModel({siteEncoded: "Chennai-B_28_2pm", spaces:defaultSpaces})
  CheB_28_2p.save()
  const CheB_28_6p=new SpaceModel({siteEncoded: "Chennai-B_28_6pm", spaces:defaultSpaces})
  CheB_28_6p.save()
  const CheB_29_10=new SpaceModel({siteEncoded: "Chennai-B_29_10am", spaces:defaultSpaces})
  CheB_29_10.save()
  const CheB_29_2p=new SpaceModel({siteEncoded: "Chennai-B_29_2pm", spaces:defaultSpaces})
  CheB_29_2p.save()
  const CheB_29_6p=new SpaceModel({siteEncoded: "Chennai-B_29_6pm", spaces:defaultSpaces})
  CheB_29_6p.save()
  const CheB_30_10=new SpaceModel({siteEncoded: "Chennai-B_30_10am", spaces:defaultSpaces})
  CheB_30_10.save()
  const CheB_30_2p=new SpaceModel({siteEncoded: "Chennai-B_30_2pm", spaces:defaultSpaces})
  CheB_30_2p.save()
  const CheB_30_6p=new SpaceModel({siteEncoded: "Chennai-B_30_6pm", spaces:defaultSpaces})
  CheB_30_6p.save()
  const CheB_31_10=new SpaceModel({siteEncoded: "Chennai-B_31_10am", spaces:defaultSpaces})
  CheB_31_10.save()
  const CheB_31_2p=new SpaceModel({siteEncoded: "Chennai-B_31_2pm", spaces:defaultSpaces})
  CheB_31_2p.save()
  const CheB_31_6p=new SpaceModel({siteEncoded: "Chennai-B_31_6pm", spaces:defaultSpaces})
  CheB_31_6p.save()

  //Chennai-C
  const CheC_01_10=new SpaceModel({siteEncoded: "Chennai-C_01_10am", spaces:defaultSpaces})
  CheC_01_10.save()
  const CheC_01_2p=new SpaceModel({siteEncoded: "Chennai-C_01_2pm", spaces:defaultSpaces})
  CheC_01_2p.save()
  const CheC_01_6p=new SpaceModel({siteEncoded: "Chennai-C_01_6pm", spaces:defaultSpaces})
  CheC_01_6p.save()
  const CheC_02_10=new SpaceModel({siteEncoded: "Chennai-C_02_10am", spaces:defaultSpaces})
  CheC_02_10.save()
  const CheC_02_2p=new SpaceModel({siteEncoded: "Chennai-C_02_2pm", spaces:defaultSpaces})
  CheC_02_2p.save()
  const CheC_02_6p=new SpaceModel({siteEncoded: "Chennai-C_02_6pm", spaces:defaultSpaces})
  CheC_02_6p.save()
  const CheC_03_10=new SpaceModel({siteEncoded: "Chennai-C_03_10am", spaces:defaultSpaces})
  CheC_03_10.save()
  const CheC_03_2p=new SpaceModel({siteEncoded: "Chennai-C_03_2pm", spaces:defaultSpaces})
  CheC_03_2p.save()
  const CheC_03_6p=new SpaceModel({siteEncoded: "Chennai-C_03_6pm", spaces:defaultSpaces})
  CheC_03_6p.save()
  const CheC_04_10=new SpaceModel({siteEncoded: "Chennai-C_04_10am", spaces:defaultSpaces})
  CheC_04_10.save()
  const CheC_04_2p=new SpaceModel({siteEncoded: "Chennai-C_04_2pm", spaces:defaultSpaces})
  CheC_04_2p.save()
  const CheC_04_6p=new SpaceModel({siteEncoded: "Chennai-C_04_6pm", spaces:defaultSpaces})
  CheC_04_6p.save()
  const CheC_05_10=new SpaceModel({siteEncoded: "Chennai-C_05_10am", spaces:defaultSpaces})
  CheC_05_10.save()
  const CheC_05_2p=new SpaceModel({siteEncoded: "Chennai-C_05_2pm", spaces:defaultSpaces})
  CheC_05_2p.save()
  const CheC_05_6p=new SpaceModel({siteEncoded: "Chennai-C_05_6pm", spaces:defaultSpaces})
  CheC_05_6p.save()
  const CheC_06_10=new SpaceModel({siteEncoded: "Chennai-C_06_10am", spaces:defaultSpaces})
  CheC_06_10.save()
  const CheC_06_2p=new SpaceModel({siteEncoded: "Chennai-C_06_2pm", spaces:defaultSpaces})
  CheC_06_2p.save()
  const CheC_06_6p=new SpaceModel({siteEncoded: "Chennai-C_06_6pm", spaces:defaultSpaces})
  CheC_06_6p.save()
  const CheC_07_10=new SpaceModel({siteEncoded: "Chennai-C_07_10am", spaces:defaultSpaces})
  CheC_07_10.save()
  const CheC_07_2p=new SpaceModel({siteEncoded: "Chennai-C_07_2pm", spaces:defaultSpaces})
  CheC_07_2p.save()
  const CheC_07_6p=new SpaceModel({siteEncoded: "Chennai-C_07_6pm", spaces:defaultSpaces})
  CheC_07_6p.save()
  const CheC_08_10=new SpaceModel({siteEncoded: "Chennai-C_08_10am", spaces:defaultSpaces})
  CheC_08_10.save()
  const CheC_08_2p=new SpaceModel({siteEncoded: "Chennai-C_08_2pm", spaces:defaultSpaces})
  CheC_08_2p.save()
  const CheC_08_6p=new SpaceModel({siteEncoded: "Chennai-C_08_6pm", spaces:defaultSpaces})
  CheC_08_6p.save()
  const CheC_09_10=new SpaceModel({siteEncoded: "Chennai-C_09_10am", spaces:defaultSpaces})
  CheC_09_10.save()
  const CheC_09_2p=new SpaceModel({siteEncoded: "Chennai-C_09_2pm", spaces:defaultSpaces})
  CheC_09_2p.save()
  const CheC_09_6p=new SpaceModel({siteEncoded: "Chennai-C_09_6pm", spaces:defaultSpaces})
  CheC_09_6p.save()
  const CheC_10_10=new SpaceModel({siteEncoded: "Chennai-C_10_10am", spaces:defaultSpaces})
  CheC_10_10.save()
  const CheC_10_2p=new SpaceModel({siteEncoded: "Chennai-C_10_2pm", spaces:defaultSpaces})
  CheC_10_2p.save()
  const CheC_10_6p=new SpaceModel({siteEncoded: "Chennai-C_10_6pm", spaces:defaultSpaces})
  CheC_10_6p.save()
  const CheC_11_10=new SpaceModel({siteEncoded: "Chennai-C_11_10am", spaces:defaultSpaces})
  CheC_11_10.save()
  const CheC_11_2p=new SpaceModel({siteEncoded: "Chennai-C_11_2pm", spaces:defaultSpaces})
  CheC_11_2p.save()
  const CheC_11_6p=new SpaceModel({siteEncoded: "Chennai-C_11_6pm", spaces:defaultSpaces})
  CheC_11_6p.save()
  const CheC_12_10=new SpaceModel({siteEncoded: "Chennai-C_12_10am", spaces:defaultSpaces})
  CheC_12_10.save()
  const CheC_12_2p=new SpaceModel({siteEncoded: "Chennai-C_12_2pm", spaces:defaultSpaces})
  CheC_12_2p.save()
  const CheC_12_6p=new SpaceModel({siteEncoded: "Chennai-C_12_6pm", spaces:defaultSpaces})
  CheC_12_6p.save()
  const CheC_13_10=new SpaceModel({siteEncoded: "Chennai-C_13_10am", spaces:defaultSpaces})
  CheC_13_10.save()
  const CheC_13_2p=new SpaceModel({siteEncoded: "Chennai-C_13_2pm", spaces:defaultSpaces})
  CheC_13_2p.save()
  const CheC_13_6p=new SpaceModel({siteEncoded: "Chennai-C_13_6pm", spaces:defaultSpaces})
  CheC_13_6p.save()
  const CheC_14_10=new SpaceModel({siteEncoded: "Chennai-C_14_10am", spaces:defaultSpaces})
  CheC_14_10.save()
  const CheC_14_2p=new SpaceModel({siteEncoded: "Chennai-C_14_2pm", spaces:defaultSpaces})
  CheC_14_2p.save()
  const CheC_14_6p=new SpaceModel({siteEncoded: "Chennai-C_14_6pm", spaces:defaultSpaces})
  CheC_14_6p.save()
  const CheC_15_10=new SpaceModel({siteEncoded: "Chennai-C_15_10am", spaces:defaultSpaces})
  CheC_15_10.save()
  const CheC_15_2p=new SpaceModel({siteEncoded: "Chennai-C_15_2pm", spaces:defaultSpaces})
  CheC_15_2p.save()
  const CheC_15_6p=new SpaceModel({siteEncoded: "Chennai-C_15_6pm", spaces:defaultSpaces})
  CheC_15_6p.save()
  const CheC_16_10=new SpaceModel({siteEncoded: "Chennai-C_16_10am", spaces:defaultSpaces})
  CheC_16_10.save()
  const CheC_16_2p=new SpaceModel({siteEncoded: "Chennai-C_16_2pm", spaces:defaultSpaces})
  CheC_16_2p.save()
  const CheC_16_6p=new SpaceModel({siteEncoded: "Chennai-C_16_6pm", spaces:defaultSpaces})
  CheC_16_6p.save()
  const CheC_17_10=new SpaceModel({siteEncoded: "Chennai-C_17_10am", spaces:defaultSpaces})
  CheC_17_10.save()
  const CheC_17_2p=new SpaceModel({siteEncoded: "Chennai-C_17_2pm", spaces:defaultSpaces})
  CheC_17_2p.save()
  const CheC_17_6p=new SpaceModel({siteEncoded: "Chennai-C_17_6pm", spaces:defaultSpaces})
  CheC_17_6p.save()
  const CheC_18_10=new SpaceModel({siteEncoded: "Chennai-C_18_10am", spaces:defaultSpaces})
  CheC_18_10.save()
  const CheC_18_2p=new SpaceModel({siteEncoded: "Chennai-C_18_2pm", spaces:defaultSpaces})
  CheC_18_2p.save()
  const CheC_18_6p=new SpaceModel({siteEncoded: "Chennai-C_18_6pm", spaces:defaultSpaces})
  CheC_18_6p.save()
  const CheC_19_10=new SpaceModel({siteEncoded: "Chennai-C_19_10am", spaces:defaultSpaces})
  CheC_19_10.save()
  const CheC_19_2p=new SpaceModel({siteEncoded: "Chennai-C_19_2pm", spaces:defaultSpaces})
  CheC_19_2p.save()
  const CheC_19_6p=new SpaceModel({siteEncoded: "Chennai-C_19_6pm", spaces:defaultSpaces})
  CheC_19_6p.save()
  const CheC_20_10=new SpaceModel({siteEncoded: "Chennai-C_20_10am", spaces:defaultSpaces})
  CheC_20_10.save()
  const CheC_20_2p=new SpaceModel({siteEncoded: "Chennai-C_20_2pm", spaces:defaultSpaces})
  CheC_20_2p.save()
  const CheC_20_6p=new SpaceModel({siteEncoded: "Chennai-C_20_6pm", spaces:defaultSpaces})
  CheC_20_6p.save()
  const CheC_21_10=new SpaceModel({siteEncoded: "Chennai-C_21_10am", spaces:defaultSpaces})
  CheC_21_10.save()
  const CheC_21_2p=new SpaceModel({siteEncoded: "Chennai-C_21_2pm", spaces:defaultSpaces})
  CheC_21_2p.save()
  const CheC_21_6p=new SpaceModel({siteEncoded: "Chennai-C_21_6pm", spaces:defaultSpaces})
  CheC_21_6p.save()
  const CheC_22_10=new SpaceModel({siteEncoded: "Chennai-C_22_10am", spaces:defaultSpaces})
  CheC_22_10.save()
  const CheC_22_2p=new SpaceModel({siteEncoded: "Chennai-C_22_2pm", spaces:defaultSpaces})
  CheC_22_2p.save()
  const CheC_22_6p=new SpaceModel({siteEncoded: "Chennai-C_22_6pm", spaces:defaultSpaces})
  CheC_22_6p.save()
  const CheC_23_10=new SpaceModel({siteEncoded: "Chennai-C_23_10am", spaces:defaultSpaces})
  CheC_23_10.save()
  const CheC_23_2p=new SpaceModel({siteEncoded: "Chennai-C_23_2pm", spaces:defaultSpaces})
  CheC_23_2p.save()
  const CheC_23_6p=new SpaceModel({siteEncoded: "Chennai-C_23_6pm", spaces:defaultSpaces})
  CheC_23_6p.save()
  const CheC_24_10=new SpaceModel({siteEncoded: "Chennai-C_24_10am", spaces:defaultSpaces})
  CheC_24_10.save()
  const CheC_24_2p=new SpaceModel({siteEncoded: "Chennai-C_24_2pm", spaces:defaultSpaces})
  CheC_24_2p.save()
  const CheC_24_6p=new SpaceModel({siteEncoded: "Chennai-C_24_6pm", spaces:defaultSpaces})
  CheC_24_6p.save()
  const CheC_25_10=new SpaceModel({siteEncoded: "Chennai-C_25_10am", spaces:defaultSpaces})
  CheC_25_10.save()
  const CheC_25_2p=new SpaceModel({siteEncoded: "Chennai-C_25_2pm", spaces:defaultSpaces})
  CheC_25_2p.save()
  const CheC_25_6p=new SpaceModel({siteEncoded: "Chennai-C_25_6pm", spaces:defaultSpaces})
  CheC_25_6p.save()
  const CheC_26_10=new SpaceModel({siteEncoded: "Chennai-C_26_10am", spaces:defaultSpaces})
  CheC_26_10.save()
  const CheC_26_2p=new SpaceModel({siteEncoded: "Chennai-C_26_2pm", spaces:defaultSpaces})
  CheC_26_2p.save()
  const CheC_26_6p=new SpaceModel({siteEncoded: "Chennai-C_26_6pm", spaces:defaultSpaces})
  CheC_26_6p.save()
  const CheC_27_10=new SpaceModel({siteEncoded: "Chennai-C_27_10am", spaces:defaultSpaces})
  CheC_27_10.save()
  const CheC_27_2p=new SpaceModel({siteEncoded: "Chennai-C_27_2pm", spaces:defaultSpaces})
  CheC_27_2p.save()
  const CheC_27_6p=new SpaceModel({siteEncoded: "Chennai-C_27_6pm", spaces:defaultSpaces})
  CheC_27_6p.save()
  const CheC_28_10=new SpaceModel({siteEncoded: "Chennai-C_28_10am", spaces:defaultSpaces})
  CheC_28_10.save()
  const CheC_28_2p=new SpaceModel({siteEncoded: "Chennai-C_28_2pm", spaces:defaultSpaces})
  CheC_28_2p.save()
  const CheC_28_6p=new SpaceModel({siteEncoded: "Chennai-C_28_6pm", spaces:defaultSpaces})
  CheC_28_6p.save()
  const CheC_29_10=new SpaceModel({siteEncoded: "Chennai-C_29_10am", spaces:defaultSpaces})
  CheC_29_10.save()
  const CheC_29_2p=new SpaceModel({siteEncoded: "Chennai-C_29_2pm", spaces:defaultSpaces})
  CheC_29_2p.save()
  const CheC_29_6p=new SpaceModel({siteEncoded: "Chennai-C_29_6pm", spaces:defaultSpaces})
  CheC_29_6p.save()
  const CheC_30_10=new SpaceModel({siteEncoded: "Chennai-C_30_10am", spaces:defaultSpaces})
  CheC_30_10.save()
  const CheC_30_2p=new SpaceModel({siteEncoded: "Chennai-C_30_2pm", spaces:defaultSpaces})
  CheC_30_2p.save()
  const CheC_30_6p=new SpaceModel({siteEncoded: "Chennai-C_30_6pm", spaces:defaultSpaces})
  CheC_30_6p.save()
  const CheC_31_10=new SpaceModel({siteEncoded: "Chennai-C_31_10am", spaces:defaultSpaces})
  CheC_31_10.save()
  const CheC_31_2p=new SpaceModel({siteEncoded: "Chennai-C_31_2pm", spaces:defaultSpaces})
  CheC_31_2p.save()
  const CheC_31_6p=new SpaceModel({siteEncoded: "Chennai-C_31_6pm", spaces:defaultSpaces})
  CheC_31_6p.save()
  const CheD_01_10=new SpaceModel({siteEncoded: "Chennai-D_01_10am", spaces:defaultSpaces})
  CheD_01_10.save()
  const CheD_01_2p=new SpaceModel({siteEncoded: "Chennai-D_01_2pm", spaces:defaultSpaces})
  CheD_01_2p.save()
  const CheD_01_6p=new SpaceModel({siteEncoded: "Chennai-D_01_6pm", spaces:defaultSpaces})
  CheD_01_6p.save()
  const CheD_02_10=new SpaceModel({siteEncoded: "Chennai-D_02_10am", spaces:defaultSpaces})
  CheD_02_10.save()
  const CheD_02_2p=new SpaceModel({siteEncoded: "Chennai-D_02_2pm", spaces:defaultSpaces})
  CheD_02_2p.save()
  const CheD_02_6p=new SpaceModel({siteEncoded: "Chennai-D_02_6pm", spaces:defaultSpaces})
  CheD_02_6p.save()
  const CheD_03_10=new SpaceModel({siteEncoded: "Chennai-D_03_10am", spaces:defaultSpaces})
  CheD_03_10.save()
  const CheD_03_2p=new SpaceModel({siteEncoded: "Chennai-D_03_2pm", spaces:defaultSpaces})
  CheD_03_2p.save()
  const CheD_03_6p=new SpaceModel({siteEncoded: "Chennai-D_03_6pm", spaces:defaultSpaces})
  CheD_03_6p.save()
  const CheD_04_10=new SpaceModel({siteEncoded: "Chennai-D_04_10am", spaces:defaultSpaces})
  CheD_04_10.save()
  const CheD_04_2p=new SpaceModel({siteEncoded: "Chennai-D_04_2pm", spaces:defaultSpaces})
  CheD_04_2p.save()
  const CheD_04_6p=new SpaceModel({siteEncoded: "Chennai-D_04_6pm", spaces:defaultSpaces})
  CheD_04_6p.save()
  const CheD_05_10=new SpaceModel({siteEncoded: "Chennai-D_05_10am", spaces:defaultSpaces})
  CheD_05_10.save()
  const CheD_05_2p=new SpaceModel({siteEncoded: "Chennai-D_05_2pm", spaces:defaultSpaces})
  CheD_05_2p.save()
  const CheD_05_6p=new SpaceModel({siteEncoded: "Chennai-D_05_6pm", spaces:defaultSpaces})
  CheD_05_6p.save()
  const CheD_06_10=new SpaceModel({siteEncoded: "Chennai-D_06_10am", spaces:defaultSpaces})
  CheD_06_10.save()
  const CheD_06_2p=new SpaceModel({siteEncoded: "Chennai-D_06_2pm", spaces:defaultSpaces})
  CheD_06_2p.save()
  const CheD_06_6p=new SpaceModel({siteEncoded: "Chennai-D_06_6pm", spaces:defaultSpaces})
  CheD_06_6p.save()
  const CheD_07_10=new SpaceModel({siteEncoded: "Chennai-D_07_10am", spaces:defaultSpaces})
  CheD_07_10.save()
  const CheD_07_2p=new SpaceModel({siteEncoded: "Chennai-D_07_2pm", spaces:defaultSpaces})
  CheD_07_2p.save()
  const CheD_07_6p=new SpaceModel({siteEncoded: "Chennai-D_07_6pm", spaces:defaultSpaces})
  CheD_07_6p.save()
  const CheD_08_10=new SpaceModel({siteEncoded: "Chennai-D_08_10am", spaces:defaultSpaces})
  CheD_08_10.save()
  const CheD_08_2p=new SpaceModel({siteEncoded: "Chennai-D_08_2pm", spaces:defaultSpaces})
  CheD_08_2p.save()
  const CheD_08_6p=new SpaceModel({siteEncoded: "Chennai-D_08_6pm", spaces:defaultSpaces})
  CheD_08_6p.save()
  const CheD_09_10=new SpaceModel({siteEncoded: "Chennai-D_09_10am", spaces:defaultSpaces})
  CheD_09_10.save()
  const CheD_09_2p=new SpaceModel({siteEncoded: "Chennai-D_09_2pm", spaces:defaultSpaces})
  CheD_09_2p.save()
  const CheD_09_6p=new SpaceModel({siteEncoded: "Chennai-D_09_6pm", spaces:defaultSpaces})
  CheD_09_6p.save()
  const CheD_10_10=new SpaceModel({siteEncoded: "Chennai-D_10_10am", spaces:defaultSpaces})
  CheD_10_10.save()
  const CheD_10_2p=new SpaceModel({siteEncoded: "Chennai-D_10_2pm", spaces:defaultSpaces})
  CheD_10_2p.save()
  const CheD_10_6p=new SpaceModel({siteEncoded: "Chennai-D_10_6pm", spaces:defaultSpaces})
  CheD_10_6p.save()
  const CheD_11_10=new SpaceModel({siteEncoded: "Chennai-D_11_10am", spaces:defaultSpaces})
  CheD_11_10.save()
  const CheD_11_2p=new SpaceModel({siteEncoded: "Chennai-D_11_2pm", spaces:defaultSpaces})
  CheD_11_2p.save()
  const CheD_11_6p=new SpaceModel({siteEncoded: "Chennai-D_11_6pm", spaces:defaultSpaces})
  CheD_11_6p.save()
  const CheD_12_10=new SpaceModel({siteEncoded: "Chennai-D_12_10am", spaces:defaultSpaces})
  CheD_12_10.save()
  const CheD_12_2p=new SpaceModel({siteEncoded: "Chennai-D_12_2pm", spaces:defaultSpaces})
  CheD_12_2p.save()
  const CheD_12_6p=new SpaceModel({siteEncoded: "Chennai-D_12_6pm", spaces:defaultSpaces})
  CheD_12_6p.save()
  const CheD_13_10=new SpaceModel({siteEncoded: "Chennai-D_13_10am", spaces:defaultSpaces})
  CheD_13_10.save()
  const CheD_13_2p=new SpaceModel({siteEncoded: "Chennai-D_13_2pm", spaces:defaultSpaces})
  CheD_13_2p.save()
  const CheD_13_6p=new SpaceModel({siteEncoded: "Chennai-D_13_6pm", spaces:defaultSpaces})
  CheD_13_6p.save()
  const CheD_14_10=new SpaceModel({siteEncoded: "Chennai-D_14_10am", spaces:defaultSpaces})
  CheD_14_10.save()
  const CheD_14_2p=new SpaceModel({siteEncoded: "Chennai-D_14_2pm", spaces:defaultSpaces})
  CheD_14_2p.save()
  const CheD_14_6p=new SpaceModel({siteEncoded: "Chennai-D_14_6pm", spaces:defaultSpaces})
  CheD_14_6p.save()
  const CheD_15_10=new SpaceModel({siteEncoded: "Chennai-D_15_10am", spaces:defaultSpaces})
  CheD_15_10.save()
  const CheD_15_2p=new SpaceModel({siteEncoded: "Chennai-D_15_2pm", spaces:defaultSpaces})
  CheD_15_2p.save()
  const CheD_15_6p=new SpaceModel({siteEncoded: "Chennai-D_15_6pm", spaces:defaultSpaces})
  CheD_15_6p.save()
  const CheD_16_10=new SpaceModel({siteEncoded: "Chennai-D_16_10am", spaces:defaultSpaces})
  CheD_16_10.save()
  const CheD_16_2p=new SpaceModel({siteEncoded: "Chennai-D_16_2pm", spaces:defaultSpaces})
  CheD_16_2p.save()
  const CheD_16_6p=new SpaceModel({siteEncoded: "Chennai-D_16_6pm", spaces:defaultSpaces})
  CheD_16_6p.save()
  const CheD_17_10=new SpaceModel({siteEncoded: "Chennai-D_17_10am", spaces:defaultSpaces})
  CheD_17_10.save()
  const CheD_17_2p=new SpaceModel({siteEncoded: "Chennai-D_17_2pm", spaces:defaultSpaces})
  CheD_17_2p.save()
  const CheD_17_6p=new SpaceModel({siteEncoded: "Chennai-D_17_6pm", spaces:defaultSpaces})
  CheD_17_6p.save()
  const CheD_18_10=new SpaceModel({siteEncoded: "Chennai-D_18_10am", spaces:defaultSpaces})
  CheD_18_10.save()
  const CheD_18_2p=new SpaceModel({siteEncoded: "Chennai-D_18_2pm", spaces:defaultSpaces})
  CheD_18_2p.save()
  const CheD_18_6p=new SpaceModel({siteEncoded: "Chennai-D_18_6pm", spaces:defaultSpaces})
  CheD_18_6p.save()
  const CheD_19_10=new SpaceModel({siteEncoded: "Chennai-D_19_10am", spaces:defaultSpaces})
  CheD_19_10.save()
  const CheD_19_2p=new SpaceModel({siteEncoded: "Chennai-D_19_2pm", spaces:defaultSpaces})
  CheD_19_2p.save()
  const CheD_19_6p=new SpaceModel({siteEncoded: "Chennai-D_19_6pm", spaces:defaultSpaces})
  CheD_19_6p.save()
  const CheD_20_10=new SpaceModel({siteEncoded: "Chennai-D_20_10am", spaces:defaultSpaces})
  CheD_20_10.save()
  const CheD_20_2p=new SpaceModel({siteEncoded: "Chennai-D_20_2pm", spaces:defaultSpaces})
  CheD_20_2p.save()
  const CheD_20_6p=new SpaceModel({siteEncoded: "Chennai-D_20_6pm", spaces:defaultSpaces})
  CheD_20_6p.save()
  const CheD_21_10=new SpaceModel({siteEncoded: "Chennai-D_21_10am", spaces:defaultSpaces})
  CheD_21_10.save()
  const CheD_21_2p=new SpaceModel({siteEncoded: "Chennai-D_21_2pm", spaces:defaultSpaces})
  CheD_21_2p.save()
  const CheD_21_6p=new SpaceModel({siteEncoded: "Chennai-D_21_6pm", spaces:defaultSpaces})
  CheD_21_6p.save()
  const CheD_22_10=new SpaceModel({siteEncoded: "Chennai-D_22_10am", spaces:defaultSpaces})
  CheD_22_10.save()
  const CheD_22_2p=new SpaceModel({siteEncoded: "Chennai-D_22_2pm", spaces:defaultSpaces})
  CheD_22_2p.save()
  const CheD_22_6p=new SpaceModel({siteEncoded: "Chennai-D_22_6pm", spaces:defaultSpaces})
  CheD_22_6p.save()
  const CheD_23_10=new SpaceModel({siteEncoded: "Chennai-D_23_10am", spaces:defaultSpaces})
  CheD_23_10.save()
  const CheD_23_2p=new SpaceModel({siteEncoded: "Chennai-D_23_2pm", spaces:defaultSpaces})
  CheD_23_2p.save()
  const CheD_23_6p=new SpaceModel({siteEncoded: "Chennai-D_23_6pm", spaces:defaultSpaces})
  CheD_23_6p.save()
  const CheD_24_10=new SpaceModel({siteEncoded: "Chennai-D_24_10am", spaces:defaultSpaces})
  CheD_24_10.save()
  const CheD_24_2p=new SpaceModel({siteEncoded: "Chennai-D_24_2pm", spaces:defaultSpaces})
  CheD_24_2p.save()
  const CheD_24_6p=new SpaceModel({siteEncoded: "Chennai-D_24_6pm", spaces:defaultSpaces})
  CheD_24_6p.save()
  const CheD_25_10=new SpaceModel({siteEncoded: "Chennai-D_25_10am", spaces:defaultSpaces})
  CheD_25_10.save()
  const CheD_25_2p=new SpaceModel({siteEncoded: "Chennai-D_25_2pm", spaces:defaultSpaces})
  CheD_25_2p.save()
  const CheD_25_6p=new SpaceModel({siteEncoded: "Chennai-D_25_6pm", spaces:defaultSpaces})
  CheD_25_6p.save()
  const CheD_26_10=new SpaceModel({siteEncoded: "Chennai-D_26_10am", spaces:defaultSpaces})
  CheD_26_10.save()
  const CheD_26_2p=new SpaceModel({siteEncoded: "Chennai-D_26_2pm", spaces:defaultSpaces})
  CheD_26_2p.save()
  const CheD_26_6p=new SpaceModel({siteEncoded: "Chennai-D_26_6pm", spaces:defaultSpaces})
  CheD_26_6p.save()
  const CheD_27_10=new SpaceModel({siteEncoded: "Chennai-D_27_10am", spaces:defaultSpaces})
  CheD_27_10.save()
  const CheD_27_2p=new SpaceModel({siteEncoded: "Chennai-D_27_2pm", spaces:defaultSpaces})
  CheD_27_2p.save()
  const CheD_27_6p=new SpaceModel({siteEncoded: "Chennai-D_27_6pm", spaces:defaultSpaces})
  CheD_27_6p.save()
  const CheD_28_10=new SpaceModel({siteEncoded: "Chennai-D_28_10am", spaces:defaultSpaces})
  CheD_28_10.save()
  const CheD_28_2p=new SpaceModel({siteEncoded: "Chennai-D_28_2pm", spaces:defaultSpaces})
  CheD_28_2p.save()
  const CheD_28_6p=new SpaceModel({siteEncoded: "Chennai-D_28_6pm", spaces:defaultSpaces})
  CheD_28_6p.save()
  const CheD_29_10=new SpaceModel({siteEncoded: "Chennai-D_29_10am", spaces:defaultSpaces})
  CheD_29_10.save()
  const CheD_29_2p=new SpaceModel({siteEncoded: "Chennai-D_29_2pm", spaces:defaultSpaces})
  CheD_29_2p.save()
  const CheD_29_6p=new SpaceModel({siteEncoded: "Chennai-D_29_6pm", spaces:defaultSpaces})
  CheD_29_6p.save()
  const CheD_30_10=new SpaceModel({siteEncoded: "Chennai-D_30_10am", spaces:defaultSpaces})
  CheD_30_10.save()
  const CheD_30_2p=new SpaceModel({siteEncoded: "Chennai-D_30_2pm", spaces:defaultSpaces})
  CheD_30_2p.save()
  const CheD_30_6p=new SpaceModel({siteEncoded: "Chennai-D_30_6pm", spaces:defaultSpaces})
  CheD_30_6p.save()
  const CheD_31_10=new SpaceModel({siteEncoded: "Chennai-D_31_10am", spaces:defaultSpaces})
  CheD_31_10.save()
  const CheD_31_2p=new SpaceModel({siteEncoded: "Chennai-D_31_2pm", spaces:defaultSpaces})
  CheD_31_2p.save()
  const CheD_31_6p=new SpaceModel({siteEncoded: "Chennai-D_31_6pm", spaces:defaultSpaces})
  CheD_31_6p.save()

  console.log("Done")
}


passport.serializeUser((user,done)=>{
  done(null,user)
})

passport.deserializeUser((id,done)=>{
  User.findById(id, (err, user)=>{
    done(err, user)
  })
})
var status="Default"
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/home",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    // console.log(profile)
    // status="in"

    User.findOrCreate({ googleId: profile.id , name: profile.displayName, email: profile._json.email}, function (err, user) {
      status="in"
      // console.log(status)
      return cb(err, user);
    });
  }
))

function repopulateSpaces(){
  SpaceModel.updateMany({},{$set:{spaces: defaultSpaces}}, (err,docs)=>{
    if(err){
      console.log(err)
    }else{
      if(docs){
        console.log("Available spaces have been refreshed and updated for the new month.")
      }

    }
  })
}

cron.schedule('0 0 1 * *', () => {
  repopulateSpaces()

})


let city=""
let site=""

app.get("/",(req,res)=>{

  // fillDB()
  // console.log(typeof(new Date().getDate()))
  // var date= new Date().getDate()
  // var hour= new Date().getHours()
  // if(date===1 && hour<10){
  //   repopulateSeats()
  // }
  // repopulateSeats()
  // console.log(status)
  res.render("home", {status: status})
})

app.route('/auth/google')
.get(passport.authenticate('google', {
    scope: ['profile','email']
}))

app.get("/auth/google/home",
    passport.authenticate("google",{failureRedirect: "/login"}), (req,res)=>{

      status="in"

      res.redirect("/")
    }
)

app.get("/register", (req, res) => {
  res.render("register")
})



app.post("/register", (req, res) => {
  User.register({
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone
  }, req.body.password, (err, user) => {
    if (err) {
      console.log(err)
      res.redirect("/register")
    } else {
      passport.authenticate("local")(req, res, () => {
        status="in"
        // console.log(req.user)
        req.flash('Success!', 'You"ve successfully registered')
        res.redirect("/")
        // console.log(userName)
      })
    }
  })
})


app.get("/login", (req, res) => {
  res.render("login")
})
app.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), (req, res) => {
  status="in"
  req.flash('Success!', 'You"ve successfully logged in.')
  res.redirect("/")
})


app.get("/booking", (req, res) => {
  if (req.isAuthenticated()) {
    // console.log(req.user)
    res.render("parking-1")
  } else {
    res.redirect("/login");
  }
})

app.post("/booking",(req,res)=>{
  var city = req.body.city
  // res.render("parking-2",{city:city})
  res.redirect("/booking/"+city)
})

app.get("/booking/:city",(req,res)=>{
  var city= req.params.city
  if(req.isAuthenticated()){
      res.render("parking-2",{city: city})
  }else{
    res.redirect("/login")
  }

})

app.post("/booking/:city", (req,res)=>{
  var site = req.body.site
  var city=req.params.city
  // var city = String(req.body.site).split("-")[0]
  // console.log(site)
  // console.log(city)
  // res.render("booking",{city:city, site:site})
  res.redirect("/booking/"+city+"/"+site)
})

app.get("/booking/:city/:site",(req,res)=>{
  if(req.isAuthenticated()){
    var city= req.params.city
    var site= req.params.site
    var date=""
    var time=""
    res.render("booking", {city: city, site: site, date: date, time:time, spaces: []})
  }else{
    res.redirect("/login")
  }
})

app.post("/booking/:city/:site",(req,res)=>{
  var city=req.params.city
  var site= req.params.site
  var datetime= String(req.body.date)+"_"+String(req.body.time)
  res.redirect("/booking/"+city+"/"+site+"/"+datetime)
})

//Seats to be rendered here from database as per availability
app.get("/booking/:city/:site/:datetime", (req,res)=>{
  if(req.isAuthenticated()){
    var city= req.params.city
    var site=req.params.site
    var date= (req.params.datetime).split("_")[0]
    var time= (req.params.datetime).split("_")[1]

    var siteInfo= site+"_"+date.split("-")[0]+"_"+time
    // console.log(siteInfo)
    // console.log(req.user)

    SpaceModel.findOne({siteEncoded: siteInfo}, (err,docs)=>{
      if(err){
        console.log(err)
      }else{
          if(docs){
              // console.log(docs)
              res.render("booking", {city: city, site: site, date: date, time: time, spaces: docs.spaces})
          }
      }

    })

  }
})

app.post("/booking/:city/:site/:datetime", (req,res)=>{
  var spaceId=req.body.spaceSelected
  var site=req.params.site
  var time=req.params.datetime.split("_")[1]
  var date= req.params.datetime.split("_")[0].split("-")[0]
  // console.log(spaceId)
  // var newUserInfo= new UserBooking({user: req.user.name, bookings})
  // var booking={site: site, date:req.params.datetime.split("_")[0], time: time, space_id: spaceId}
  // console.log(req.user.name)
  UserBooking.findOne({user: req.user.name}, (err,doc)=>{
    if(err){
      console.log(err)
    }else{
      if(doc){
          var booking={site: site, date:req.params.datetime.split("_")[0], time: time, space_id: spaceId}
          UserBooking.updateOne({user:req.user.name},{$push:{bookings:booking}},(err)=>{
            if(err){
              console.log("Update failed")
              console.log(err)
            }else{
              console.log("Update successful")
            }
          })
      }
      else{
          // UserBooking.create({user:req.user.name, "bookings.site":site, "bookings.date": req.params.datetime.split("_")[0], "bookings.time":time, "bookings.space_id":spaceId})
          const newUserInfo= new UserBooking({user:req.user.name, bookings:[{site:site, date: req.params.datetime.split("_")[0],time:time,space_id:spaceId}]})
          newUserInfo.save()
      }
    }
  })

  // UserBooking.create({user: req.user.name, "bookings.site": site, "bookings.date": req.params.datetime.split("_")[0], "bookings.time": time, "bookings.space_id": spaceId})
  SpaceModel.updateOne({siteEncoded: site+"_"+date+"_"+time},{
    $pull:{
      spaces: spaceId
    },
  }, (err,docs)=>{
    if(err){
      console.log(err)
    }else{
      if(docs){
        console.log("removed")
      }
    }
  })
const confirmationMailBody=`<head>

  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Request Confirmation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body {
background-color: #ffe8d2;
text-align: center;
font-family: 'Montserrat', sans-serif
}
.table{
	text-align: center;
}
.card {
border: none
}

.totals tr td {
font-size: 13px
}
.footer {
background-color: #1abc9c
}
.footer span {
font-size: 12px
}
.product-qty span {
font-size: 12px;
color: #dedbdb
}

  </style>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>
<body style="text-align: center">

  <div class="container">
<div class="row d-flex justify-content-center">
<div class="col-md-6">
<div class="card">

<div class="invoice p-5">
<div style="background-color: #4169E1"><h2 style="color: #ffffff">Request Confirmed!</h2></div> <span class="font-weight-bold d-block mt-4"><strong>Hello `+req.user.name+`,</strong> </span> <br>
<span style="padding-bottom: 5%">Your parking space has been booked.</span>
<hr>
<div class="payment border-top mt-3 mb-3 border-bottom table-responsive">

<table style="margin-left:38%" class="table table-borderless">

<tr>
<td>
<div class="py-2"> <span class="d-block text-muted"><strong>Date</strong></span></div>
</td>
<td>
<div class="py-2"> <span class="d-block text-muted"><strong>Space Id</strong></span></div>
</td>
<td>
<div class="py-2"> <span class="d-block text-muted"><strong>Slot</strong></span></div>
</td>
<td>
<div class="py-2"> <span class="d-block text-muted"><strong>Parking Site</strong></span></div>
</td>
</tr>
<tr>
<td>
<div class="py-2"><span>`+req.params.datetime.split("_")[0]+`</span> </div>
</td>
<td>
<div class="py-2"> <span>`+spaceId+`</span> </div>
</td>
<td>
<div class="py-2"><span>`+time+`</span> </div>
</td>
<td>
<div class="py-2"><span>`+site+`</span> </div>
</td>
</tr>

</table>

<hr>
<p style="padding-top: 5%">Hope you had a good experience with our service. Your feedback is appreciated.</p>
<p class="font-weight-bold mb-0">Thanks for using us!</p> <span style="padding-bottom: 5%"><strong>Park Safe</strong></span>
</div>
<div class="d-flex justify-content-between footer p-3"> <span style="padding-top: 2%; padding-bottom: 2%;">© 2022 Copyright: <strong>AbhimanyuG21</strong></span> </div>
</div>
</div>
</div>
</div>

</body>`
const msg = {
to: req.user.email, // Change to your recipient
from: process.env.EMAIL, // Change to your verified sender
subject: 'Booking successful.',
text: 'Congratulations.',
html: confirmationMailBody,
}


sendgrid
.send(msg)
.then((response) => {
  console.log(response[0].statusCode)
  console.log(response[0].headers)
})
.catch((error) => {
  console.error(error.toString())
})

  res.redirect("/success")
})

app.get("/success", (req,res)=>{
  if(req.isAuthenticated()){
      res.render("success")
  }

})

app.get("/my/profile",(req,res)=>{
  if(req.isAuthenticated()){
    res.render("profile", {user: req.user.name})
  }else{
    res.redirect("/login")
  }
})

app.get("/my/details", (req,res)=>{
  if(req.isAuthenticated()){
    User.findOne({name: req.user.name},(err,foundData)=>{
      if(err){
        console.log(err)
      }else{
        if(foundData){
          res.render("profile-details", {name: req.user.name, email: foundData.email, phone: foundData.phone, address: foundData.address, numberPlate: foundData.numberPlate})
        }
      }
    })
  }else{
    res.redirect("/login")
  }
})

app.post("/my/details", (req,res)=>{
  const name=req.body.name
  const email= req.body.email
  const phone= req.body.phone
  const address= req.body.address
  const numberPlate= req.body.numberPlate
  User.updateOne({name: name},
    {name: name,
    email: email,
  phone: phone,
address: address,
numberPlate: numberPlate},(err, docs)=>{
    if(err){
      console.log(err)

    }else{
      if(docs){
        console.log("Profile details uodated.")

      }
    }
    res.redirect(req.get("Referrer"))
})
})

app.get("/view/orders",(req,res)=>{
  if(req.isAuthenticated()){
    UserBooking.findOne({user:req.user.name}, (err,docs)=>{
      if(err){
        console.log(err)
      }else{
        if(docs){
          // console.log(docs.bookings)
          res.render("profile-bookings", {user:req.user.name, bookings:docs.bookings})
        }
      }
    })

  }else{
    res.redirect("/login")
  }
})

app.post("/view/orders", (req,res)=>{
  if(req.isAuthenticated()){
    const bookingId= req.body.cancel

    const cancellationMailBody=`<head>

      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Booking Cancellation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    body {
    background-color: #ffe8d2;
    text-align: center;
    font-family: 'Montserrat', sans-serif
    }
    .table{
    	text-align: center;
    }
    .card {
    border: none
    }

    .totals tr td {
    font-size: 13px
    }
    .footer {
    background-color: #1abc9c
    }
    .footer span {
    font-size: 12px
    }
    .product-qty span {
    font-size: 12px;
    color: #dedbdb
    }

      </style>
    	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </head>
    <body style="text-align: center">

      <div class="container">
    <div class="row d-flex justify-content-center">
    <div class="col-md-6">
    <div class="card">

    <div class="invoice p-5">
    <div style="background-color: #E34234"><h2 style="color: #ffffff">Booking Cancelled!</h2></div> <span class="font-weight-bold d-block mt-4"><strong>Hello `+req.user.name+`,</strong> </span> <br>
    <span style="margin-bottom: 2%">Your parking space booking has been cancelled.</span>
    <hr>
    <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">

    <table style="margin-left:42%; margin-top: 2%" class="table table-borderless">

    <tr>
    <td>
    <div class="py-2"> <span class="d-block text-muted"><strong>Booking Id</strong></span></div>
    </td>
    </tr>
    <tr>
    <td>
    <div class="py-2"><span>`+bookingId+`</span> </div>
    </td>
    </tr>

    </table>

    <hr>
    <p style="padding-top: 5%">Hope you had a good experience with our service. Your feedback is appreciated.</p>
    <p class="font-weight-bold mb-0">Thanks for using us!</p> <span style="padding-bottom: 5%"><strong>Park Safe</strong></span>
    </div>
    <div class="d-flex justify-content-between footer p-3"> <span style="padding-top: 2%; padding-bottom: 2%;">© 2022 Copyright: <strong>AbhimanyuG21</strong></span> </div>
    </div>
    </div>
    </div>
    </div>

    </body>`
    // console.log(bookingId)
    UserBooking.findOneAndUpdate({user:req.user.name},
      {$pull:{bookings: {_id: bookingId}}},
      (err, doc)=>{
        if(err){
          console.log(err)
        }else{
          if(doc){
            const msg = {
            to: req.user.email, // Change to your recipient
            from: process.env.EMAIL, // Change to your verified sender
            subject: 'Booking cancelled.',
            text: 'Cancelled.',
            html: cancellationMailBody,
            }


            sendgrid
            .send(msg)
            .then((response) => {
              console.log(response[0].statusCode)
              console.log(response[0].headers)
            })
            .catch((error) => {
              console.error(error.toString())
            })
            console.log("Deleted.")
          }
        }
        res.redirect(req.get("Referrer"))
      })
  }
})

app.get("/about", (req, res)=>{
  res.render("about", {status: status})
})


app.get("/contact", (req,res)=>{
  res.render("contact", {status: status})
})

app.post("/contact", (req,res)=>{
  const name=req.body.name
  const email=req.body.email
  const subject= req.body.subject
  const msg=req.body.message


  const feedback = subject+"\n"+msg

  const acknowledmentMailBody=`<head>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Booking Cancellation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  body {
  background-color: #ffe8d2;
  text-align: center;
  font-family: 'Montserrat', sans-serif
  }
  .table{
    text-align: center;
  }
  .card {
  border: none
  }

  .totals tr td {
  font-size: 13px
  }
  .footer {
  background-color: #1abc9c
  }
  .footer span {
  font-size: 12px
  }
  .product-qty span {
  font-size: 12px;
  color: #dedbdb
  }

    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </head>
  <body style="text-align: center">

    <div class="container">
  <div class="row d-flex justify-content-center">
  <div class="col-md-6">
  <div class="card">

  <div class="invoice p-5">
  <div style="background-color: #E34234"><h2 style="color: #ffffff">Query received and acknowledged!</h2></div> <span class="font-weight-bold d-block mt-4"><strong>Hello `+name+`,</strong> </span> <br>
  <span style="margin-bottom: 2%">Your query has been received and we will get back to you asap.</span>
  <hr>

  <p style="padding-top: 5%">Hope you had a good experience with our service. Your feedback is appreciated.</p>
  <p class="font-weight-bold mb-0">Thanks for using us!</p> <span style="padding-bottom: 5%"><strong>Park Safe</strong></span>
  </div>
  <div class="d-flex justify-content-between footer p-3"> <span style="padding-top: 2%; padding-bottom: 2%;">© 2022 Copyright: <strong>AbhimanyuG21</strong></span> </div>
  </div>
  </div>
  </div>
  </div>
  </body>`

  User.findOneAndUpdate({email: email},
    {$push: {feedback: feedback}},
    (err, doc)=>{
      if(err){
        console.log(err)
        console.log("Email id not registered. Try again with registered mail id.")
        res.redirect("/contact")
      }
      else{
        if(doc){
          const qmsg = {
          to: process.env.EMAIL, // Change to your recipient
          from: process.env.EMAIL, // Change to your verified sender
          subject: 'Customer Query- '+subject,
          text: 'Customer Query',
          html: '<p><strong>Customer query</strong></p>'+msg,
          }


          sendgrid
          .send(qmsg)
          .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
          })
          .catch((error) => {
            console.error(error.toString())
          })

          const fbmsg = {
          to: email, // Change to your recipient
          from: process.env.EMAIL, // Change to your verified sender
          subject: 'Message acknowledged',
          text: 'Query acknowledged',
          html: acknowledmentMailBody,
          }


          sendgrid
          .send(fbmsg)
          .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
          })
          .catch((error) => {
            console.error(error.toString())
          })

          res.redirect("/thankyou")
        }
      }
    }
  )





})

app.get("/thankyou", (req,res)=>{
  res.render("thankyou",{status: status})
})

app.get("/logout", (req, res) => {
  req.logout()
  status="Default"
  res.redirect("/")
})


// let port= process.env.PORT;
// if (port == null || port == ""){
//   port=3000
// }

// const port = process.env.PORT || 3000;

let port= process.env.PORT;
if (port == null || port == ""){
  port=3000
}
app.listen(port, function() {
  console.log("Server has started");
});
