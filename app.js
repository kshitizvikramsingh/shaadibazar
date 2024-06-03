const path= require("path")
const express = require ("express")
const Razorpay=require("razorpay")


const app=express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pubDir= path.join(__dirname,"/public")
const viewsDir= path.join(__dirname,"/views")

app.use(express.static(pubDir))

app.set("view engine", "ejs")
app.set("views", viewsDir)

let orderId,id,idt
app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/products",async (req,res)=>{
    

    res.render("products")
})

app.post("/checkout",(req,res)=>{

    var instance = new Razorpay({
        key_id: 'rzp_test_uGXwmjbEx8HYBf',
        key_secret: '5HdMdAmMrgeId2NdbPhp5Jcd',
      });
      var options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",
        notes:{
            "item":"apple",
            "quantity":1
        }
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        console.log(order.id)
         orderId=order.id
      });
      let itemid=req.body.itemid
    res.render("checkout",{itemid,orderId})
    
   
})







app.listen("80",()=>{
    console.log("App is up on port 80")
})