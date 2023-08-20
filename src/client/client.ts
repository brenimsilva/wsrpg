import Client from "./models/Client.js";
import Player from "./models/Player.js";
import { Attributes, Stats } from "../Types.js";
import Sprite, { xy } from "./models/Sprite.js";
import { ctx, canvas } from "./models/Canvas.js";
import {bundleMessage} from "../server/server.js"
import { start } from "./Game.js";
import RandomId from "../server/Util/RandomId.js";

const position: xy = {x: Math.trunc(Math.random() * canvas.width)+1, y: Math.trunc(Math.random() *canvas.height)+1 }
const playerSprite = new Sprite({x: position.x, y: position.y}, {x: 0, y: 0}, 50, 50);
const player = new Player({}as Stats, {} as Attributes,0, playerSprite, "0");
const c = new Client("ws://localhost:3000", player);


