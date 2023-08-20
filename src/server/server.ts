import {Server, createServer} from "http";
import { RawData, WebSocket, WebSocketServer } from "ws";
import {Attributes, ConMessage, IMessage, Stats} from "../Types"
import Client, { TClient } from "../client/models/Client";
import Player from "../client/models/Player";
import {v4} from "uuid";
import Sprite, { xy } from "../client/models/Sprite";
import { ctx, canvas } from "../client/models/Canvas";
export type bundleMessage = {
    msgType: "BUNDLE",
    message: Array<{client: TClient, socket: WebSocket}>
}

export type ClientSocket = {
client: TClient, socket: WebSocket
}
export default class RpgServer {
    private static _server: WebSocketServer;
    private static _port: number;
    private static _clientList: Array<ClientSocket> = [];
    constructor() {
    }
    static Start(port: number) {
        this._server = new WebSocketServer({port: port});  
        this._server.on("connection", (socket) => {
            socket.send("Teste Server");
            socket.on("message", (msg) => {
                this._handleMessage(msg, socket);
            });
            socket.on("close", (ev) => {
                // ev.toString();
                console.log("Closed connection")
                this._clientList = this._clientList.filter(c => c.socket !== socket);
                this._broadCast<bundleMessage>({msgType: "BUNDLE", message: this._clientList});
            })
        });
        
    }

    private static _handleMessage(msg: RawData, socket: WebSocket) {
        const json: IMessage = JSON.parse(msg.toString());
        switch(json.msgType) {
            case "CON":
                let client = json.message as unknown as TClient;
                client.id = v4();
                
                client.player.id = v4();
                this._clientList.push({client: client, socket});
                // socket.send(JSON.stringify(client));
                const bundle: bundleMessage = {msgType: "BUNDLE", message: this._clientList}
                this._broadCast<bundleMessage>(bundle);
                break;
            case "DESCON":
                client = json.message as unknown as TClient;
                this._clientList = this._clientList.filter(c => c.client.id !== client.id);
                break;
        }
    }
    private static _broadCast<T>(msg: T) {
        const message = JSON.stringify(msg);
        this._clientList.forEach(c => {
            c.socket.send(message);
        })
    }
}

RpgServer.Start(3000);
