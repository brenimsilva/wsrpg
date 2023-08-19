import ElementSelector from "./Util/ElementSelector.js"
import Sprite from "./models/Sprite.js";

const {_} = ElementSelector.getInstance();
import { ctx, canvas } from "./models/Canvas.js";


const player = new Sprite({x:0,y:0}, {x: 5, y: 10}, 50, 50);
player.draw();
function animate() {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = "black"
    ctx.fillRect(0,0, canvas.width, canvas.height);
    player.update();
}

animate();