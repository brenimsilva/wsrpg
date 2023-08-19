export type xy = {
    x: number;
    y: number;
}
import {canvas, ctx} from "./Canvas.js";
export default class Sprite {
    constructor(public position: xy, public velocity: xy,
         public height: number, public width: number,
         ) {}

    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if(this.position.x + this.width + this.velocity.x >= canvas.width) {
            this.velocity.x = 0;
        }
        if(this.position.y + this.height >= canvas.height) {
            this.velocity.y = 0;
        }
    }
    
    
}