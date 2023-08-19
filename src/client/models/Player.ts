import { Attributes, Stats } from "../../Types"

export default class Player {
    private stats: Stats;
    private attributes: Attributes
    private skill_points: number;
    constructor(stats: Stats, attributes: Attributes, skill_points: number) {
        this.attributes = attributes;
        this.stats = stats;
        this.skill_points = skill_points;
    }
}