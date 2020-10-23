const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const PORT = 4000;
const zinderRoutes=express.Router();


app.use(cors());
app.use('/',zinderRoutes)
app.use(bodyParser.json());

//this connects mongodb to the server
mongoose.connect('mongodb+srv://admin:Zinder123@cluster0.uuill.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function(){
    console.log("Server is running on Port: " +PORT);
});