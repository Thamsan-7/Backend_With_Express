import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const App=express();
App.use(express.json());
App.use(cookieParser());
App.use(cors());
dotenv.config();

App.get('/',(req,res)=>{
  res.send({message:'Hello World!',name:'thamsan majhi',age:'76'});
});

export default App;