import ElementSelector from "./Util/ElementSelector.js";
import Sprite from "./models/Sprite.js";
const {_} = ElementSelector.getInstance();
import { ctx, canvas } from "./models/Canvas.js";
import Player from "./models/Player.js";
import { ClientSocket } from "../server/server.js";

export function start(players: Array<Player>, playerIndex: number) {
    window.addEventListener("keydown", ({key}) => {
        switch(key) {
            case "a":
                players[playerIndex].sprite.velocity.x = -5;
            break;

            case "d":
                players[playerIndex].sprite.velocity.x = 5;
            break;
        }
    })

    window.addEventListener("keyup", ({key}) => {
        switch(key) {
            case "a":
                players[playerIndex].sprite.velocity.x = 0;
            break;
            case "d":
                players[playerIndex].sprite.velocity.x = 0;
            break;
        }
    })

    animate();
    function animate() {
        window.requestAnimationFrame(animate);
        ctx.fillStyle = "black"
        ctx.fillRect(0,0, canvas.width, canvas.height);
        players.forEach(p => {
            p.sprite.update();
        })
    }
}




