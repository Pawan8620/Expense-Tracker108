const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./config/connectDB");
// const connectDb = require("./config/connectDB.js");
//config dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
//users routes
app.use(('/api/v1/users'),require('./routes/userRoute'));
//transection routes
app.use('/api/v1/transections', require("./routes/transectionRoutes"));

//static Files
app.use(express.static(path.join(__dirname,"./client/build")))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
});

//port
const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})













// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const connectDb = require("./config/connectDB.js");
// //config dot env file
// dotenv.config();

// //database call
// connectDb();

// //rest object
// const app = express();

// //middlewares
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(cors());

// //routes
// app.get('/',(req,res)=>{
//     res.send("<h1>Hello from server</h1>");
// })

// //port
// const PORT = 8080 || process.env.PORT;

// //listen server
// app.listen(PORT,()=>{
//     console.log(`Server running on port ${PORT}`);
// })

