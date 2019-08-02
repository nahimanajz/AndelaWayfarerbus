import dotenv from 'dotenv';
dotenv.config();
import router from './server/routes/mainRoute';

import express from 'express';
import  bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/v1', router);

const PORT = process.env.PORT|| 8000;

app.listen(PORT, (req, res)=>{
    console.log(`app connected.....${PORT}`);
});