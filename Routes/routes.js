import appRoute from "./appRoute.js"
import userRoute from "./userRoute.js"
import webRoute from "./webRoute.js"
import express  from "express";
const Route=express.Router()
Route.use('/api/', appRoute);
Route.use('/api/user/', userRoute);
Route.use('/', webRoute);

export default Route
