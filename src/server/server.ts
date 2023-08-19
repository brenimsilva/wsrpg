import {Server, createServer} from "http";
import { WebSocketServer } from "ws";
export default class RpgServer {
    private static _server: WebSocketServer;
    private static _port: number;
    constructor() {
    }
    static Start(port: number) {
        this._server = new WebSocketServer({port: port});  
        this._server.on("connection", (socket) => {
            socket.send("Teste Server");
            socket.on("message", (msg) => {
                console.log(msg.toString());
            })
        })
    }
}

RpgServer.Start(3000);
