const express=require('express');
const port=process.env.port ||3000;
const app=express();
const hbs=require('hbs');
const path=require('path');
const mypublic=path.join(__dirname,("../public"));
const mypartials=path.join(__dirname,("../partials"));
app.use(express.static(mypublic));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine","hbs");
hbs.registerPartials(mypartials);

// Define Mongoose
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/registration');

}
const registrationSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    proffession:String,
    password:String,
    confirmpassword:String

  });
  const Registration = mongoose.model('Registration', registrationSchema);

app.get("/",(req,res)=>{
res.render('index')
})
app.get("/register",(req,res)=>{
const params={}
res.render("register")
})
app.get("/login",(req,res)=>{
const params={}
res.render("login")

})
app.get("/aboutme",(req,res)=>{
res.render("aboutme")
})
app.post("/login",async(req,res)=>{
  const email=req.body.email
  const password=req.body.password
  const match=Registration.findOne({email})
  console.log(match)
  if(email===email){
  if(password==password){
  res.send("successful")

  }
  else{
 
   res.send("password not match")

  }
  }
  else{




  }
  // const successful = new Registration({ 
  //   email:req.body.email,
  //   password:req.body.password,
  
  //   });
  //    res.render("aboutme")



})
app.post("/register",async(req,res)=>{
  const successful = new Registration({ 
  name:req.body.name,
  email:req.body.email,
  mobile:req.body.mobile,
  proffession:req.body.proffession,
  password:req.body.password,
  confirmpassword:req.body.confirmpassword 
  });
  successful.save()
  res.render("login",{successful})


})
app.listen(port,(req,res)=>{

console.log("Running on Port 3000")


})

