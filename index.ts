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
let port:any = process.env.PORT ? parseInt(process.env.PORT) : 3000
var host = process.env.PORT ? "0.0.0.0" : "localhost"
server.listen(port, host, () => console.log("Server Avviato sulla porta " + 3000));

app.use("/", (req : Request, res : Response, next : NextFunction) => {
    console.log(`>--> ${req.method} ${req.url}`)
    console.log("ENTRATO")
    res.send("SUS")
    next();
})