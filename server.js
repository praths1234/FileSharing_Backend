import express from "express";
import cors from 'cors';
import DBConnection from "./database/db.js";
import routes from "./routes/routes.js";
import dotenv from 'dotenv';
dotenv.config();
const app=express();
app.use(cors());

app.use('/' , routes);

DBConnection(process.env.MONGODB_URI);
const PORT=8000;
app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));
