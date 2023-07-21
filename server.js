const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const dotenv= require("dotenv")

const app= express();
dotenv.config()

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("MongoDb is connected"))
.catch((err)=>{
  console.log(err)
})

const ChartData= require("./models/DataModel")

const getRouter= require("./routes/getData")
const postRouter= require('./routes/postData')
app.use('/get/chart/Data',getRouter)
app.use('/post/chart/data',postRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
