import Player from "./Player.js";
import { ConMessage, DesConMessage, IMessage } from "../../Types";
import { start } from "../Game.js";
import { ClientSocket, bundleMessage } from "../../server/server.js";

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
            this.handleConnection(e);
        })
        this.addEventListener("message", (msg) => {
            this.handleMessage(msg);
        });
    }

    handleConnection(e: Event) {
        const client: TClient = {id: "0", player: this._player}
        const conMessage: ConMessage = {msgType: "CON", message: client}
        this.send(JSON.stringify(conMessage));
    }

    handleMessage(msg: MessageEvent) {
        try {
            const msgJson: IMessage = JSON.parse(msg.data);
            switch(msgJson.msgType) {
                case "BUNDLE": {
                    const msgConverted: ClientSocket[] = msgJson.message as unknown as Array<ClientSocket>
                    const players: Array<Player> = msgConverted.map(e => {
                        return  new Player(e.client.player.stats, e.client.player.attributes, e.client.player.skill_points, e.client.player.sprite, e.client.player.id);
                    })
                    console.log(players)
                    start(players, this._player);
                    break;
                }
                case "CON": {
                    const json: TClient = JSON.parse(msg.data);
                    this._id = json.id;
                    console.log("ID atribuido com sucesso");
                    break;
                }
            }
        } catch{ 

        }
    }
    
}