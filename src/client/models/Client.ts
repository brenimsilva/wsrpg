import Player from "./Player.js";
import { ConMessage, DesConMessage, IMessage } from "../../Types";
import { start } from "../Game.js";

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
                    const msgConverted: TClient[] = msgJson.message as unknown as TClient[]
                    const players: Array<Player> = msgConverted.map(c => {
                        const fillColor = c.id === this._id ? "blue" : "green"
                        return  new Player(c.player.stats, c.player.attributes, c.player.skill_points, c.player.sprite, fillColor, c.id);
                    });
                    const playerIndex = players.findIndex(p => p.id === this._id);
                    
                    console.log(players)
                    start(players, playerIndex);
                    break;
                }
                case "CON": {
                    const json: TClient = JSON.parse(msg.data).message.client;
                    this._id = json.id;
                    console.log("ID atribuido com sucesso");
                    break;
                }
            }
        } catch{ 

        }
    }
    
}