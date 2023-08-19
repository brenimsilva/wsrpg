export default class RandomId {
    private static _id: number = 0;
    constructor() {
    }

    static createId() {
        return `c_${++this._id}`
    }
}