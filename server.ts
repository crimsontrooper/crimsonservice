import https from "https";
import {ReadFileAsync} from "./tools/tools.ts"
import express, { Express } from "express";

const app : Express = express();

const [cert, key] = await Promise.all([
    ReadFileAsync("./keys/certificate.crt"),
    ReadFileAsync("./keys/private_key.pem")
]);

const server = https.createServer({key, cert}, app);

server.listen(process.env.PORT, () => console.log("Server Avviato"));