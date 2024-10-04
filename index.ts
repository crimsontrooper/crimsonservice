import https from "https";
import {ReadFileAsync} from "./tools/tools.js"
import express, { Express } from "express";
import {Request, Response, NextFunction} from "express"

const app : Express = express();

const [cert, key] = await Promise.all([
    ReadFileAsync("./keys/certificate.crt"),
    ReadFileAsync("./keys/private_key.pem")
]);

const server = https.createServer({ key, cert }, app);

server.listen(8001, () => console.log("Server Avviato sulla porta " + 8001));

app.use("/", (req : Request, res : Response, next : NextFunction) => {
    console.log(`>--> ${req.method} ${req.url}`)
    next();
})