export default class ElementSelector {
    private static _instance: ElementSelector;
    constructor() {}

    public static getInstance() : ElementSelector {
        if(!ElementSelector._instance) {
            ElementSelector._instance = new ElementSelector();
        }
        return ElementSelector._instance;
    }

    public _<T>(selector: string): T {

        return document.querySelector(selector) as T
    }
}