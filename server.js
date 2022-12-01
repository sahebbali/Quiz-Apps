import express  from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";
import mongoose from "mongoose";

import router from './router/router.js';
// import connect from "./database/conn.js";


const app=express();


/** App Midddlewares */

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();


// const port=process.env.PORT || 3000;

/** routers */
app.use('/api',router);

app.get('/',(req,res)=>{
    try {
        res.json("Get Request");
    } catch (error) {
        res.json(error)
        
    }
})

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


// .then(()=>{
//     try {
//         app.listen(port,()=>{
//             console.log(`Server Connected to http://localhost:${port}`);
//         })
//     } catch (error) {
//         console.log("Cannot Connect to Database");
        
//     }
// }).catch(error=>{
//     console.log("Invalid Database connection");
// })

