import https from "https";
import http from "http"
import {ReadFileAsync} from "./tools/tools.js"
import express, { Express } from "express";
import {Request, Response, NextFunction} from "express"

const app : Express = express();
app.use(express.json())

const [cert, key] = await Promise.all([
    ReadFileAsync("./keys/certificate.crt"),
    ReadFileAsync("./keys/private_key.pem")
]);

// const server = https.createServer({ key, cert }, app);
const server = http.createServer(app);
let port = process.env.PORT ? parseInt(process.env.PORT) : 3000
var host = process.env.PORT ? "0.0.0.0" : "localhost"
server.listen(port, host, () => console.log("Server Avviato sulla porta " + port));

app.use("/upload", (req : Request, res : Response, next : NextFunction) => {
    console.log(`>--> ${req.method} ${req.url}`)
    console.log("ENTRATO")
    console.log(JSON.stringify(req.body.file_key))
    console.log(req.body.file_key)
    res.send(req.body.file_key)
    next();
})