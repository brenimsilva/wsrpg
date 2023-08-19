import { TClient } from "./client/models/Client"
import Player from "./client/models/Player"

type IMessage = {
    msgType: "CON" | "ACT",
    message: string
}

type ConMessage = {
    msgType: "CON",
    message: TClient
}

type Attributes = {
    str: number; // Modify Attack Damage
    dex: number; // Modify Defense and Hit Rate
    agi: number; // Modify Attack Speed and evasion
    vit: number; // Modify Health Points
}

type Stats = {
    attack_damage: number;
    defense: number;
    hit_rate: number;
    attack_speed: number;
    evasion: number;
    health_points: number;
}

export type {IMessage, Attributes, Stats, ConMessage}


