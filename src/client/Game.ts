import ElementSelector from "./Util/ElementSelector.js";
import Sprite from "./models/Sprite.js";
const {_} = ElementSelector.getInstance();
import { ctx, canvas } from "./models/Canvas.js";
import Player from "./models/Player.js";
import { ClientSocket } from "../server/server.js";

export function start(players: Array<Player>, player: Player) {
    window.requestAnimationFrame(() => start(players, player));
    ctx.fillStyle = "black"
    ctx.fillRect(0,0, canvas.width, canvas.height);
    players.forEach(p => {
        p.sprite.update();
    })
}




