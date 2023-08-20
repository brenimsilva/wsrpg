import ElementSelector from "../Util/ElementSelector.js";
const {_} = ElementSelector.getInstance();
 
export const canvas = _("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = 1024;
canvas.height = 576;
ctx.fillRect(0,0, canvas.width, canvas.height);