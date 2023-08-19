import {Server, createServer} from "http";
import { RawData, WebSocket, WebSocketServer } from "ws";
import {Attributes, ConMessage, IMessage, Stats} from "../Types"
import Client, { TClient } from "../client/models/Client";
import Player from "../client/models/Player";
import RandomId from "./Util/RandomId";
export default class RpgServer {
    private static _server: WebSocketServer;
    private static _port: number;
    private static _clientList: Array<{client: TClient, socket: WebSocket}> = [];
    constructor() {
    }
    static Start(port: number) {
        this._server = new WebSocketServer({port: port});  
        this._server.on("connection", (socket) => {
            socket.send("Teste Server");
            socket.on("message", (msg) => {
                this._handleMessage(msg, socket);
            })
        })
    }

    private static _handleMessage(msg: RawData, socket: WebSocket) {
        const json: IMessage = JSON.parse(msg.toString());
        switch(json.msgType) {
            case "CON":
                const client = json.message as unknown as TClient;
                client.id = RandomId.createId();
                this._clientList.push({client: client, socket});
                socket.send(JSON.stringify(client));
                break;
        }
    }
}

RpgServer.Start(3000);
