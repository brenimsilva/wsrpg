export type xy = {
    x: number;
    y: number;
}
// import {canvas, ctx} from "./Canvas.js";
export default class Sprite {
    public velocity: xy
    public fillStyle: string;
    constructor(public position: xy,
         public height: number, public width: number,
         ) {
            this.velocity = {x: 0, y: 0};
            this.fillStyle = "green";
         }

    private draw() {
        ctx.fillStyle = this.fillStyle
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if(this.position.x + this.width + this.velocity.x >= canvas.width) {
            this.velocity.x = 0;
        }
        if(this.position.y + this.height >= canvas.height || this.position.y - this.height <= canvas.height) {
            this.velocity.y = 0;
        }
    }
    
    
}