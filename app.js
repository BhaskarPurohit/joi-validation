const express = require("express")
const app = express()
// const {} = require("./models/user-model")

const {userModel,modelValidator} = require("./models/user-model")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("server running")
})

app.post("/create",async(req,res)=>{
   let{name,username,age,contact,email} = req.body

   let error = modelValidator({name,username,age,contact,email})
   if(error) res.status(500).send(error.message)

   else res.send('works fine')


   }

)


app.listen(3000)