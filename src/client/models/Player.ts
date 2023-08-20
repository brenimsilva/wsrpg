import { Attributes, Stats } from "../../Types"
import Sprite from "./Sprite.js";
export default class Player {
    public stats: Stats;
    public attributes: Attributes
    public skill_points: number;
    public sprite: Sprite;
    public id: string;
    constructor(stats: Stats, attributes: Attributes, skill_points: number, sprite: Sprite, id: string) {
        this.id = id;
        this.attributes = attributes;
        this.stats = stats;
        this.skill_points = skill_points;
        this.sprite = new Sprite(sprite.position, sprite.velocity, sprite.height, sprite.width);
    }

} 