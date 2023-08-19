import Client from "./models/Client.js";
import Player from "./models/Player.js";
import { Attributes, Stats } from "../Types.js";
const c = new Client("ws://localhost:3000", new Player({}as Stats, {} as Attributes, 0));


