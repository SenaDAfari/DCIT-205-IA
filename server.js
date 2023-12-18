import express  from "express";
import {connectdb} from "./db.js"

await connectdb ('mongodb://localhost:27017/')

export const server = express()