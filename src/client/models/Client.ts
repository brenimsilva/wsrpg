import Player from "./Player";
import { ConMessage, IMessage } from "../../Types";

export type TClient = {
    id: string,
    player: Player
}
export default class Client extends WebSocket{
    private _id: string = "";
    private _player: Player
    constructor(url: string, player: Player) {
        super(url);
        this._player = player;
        this.addEventListener("open", (e) => {
            this.hanleConnection(e);
        })
        this.addEventListener("message", (msg) => {
            this.handleMessage(msg);
        });
    }

    hanleConnection(e: Event) {
        const client: TClient = {id: "0", player: this._player}
        const conMessage: ConMessage = {msgType: "CON", message: client}
        this.send(JSON.stringify(conMessage));
    }

    handleMessage(msg: MessageEvent) {
        try {
            const json: TClient = JSON.parse(msg.data);
            this._id = json.id;
            console.log("ID atribuido com sucesso");
        } catch{ 
            
        }
    }
    
}