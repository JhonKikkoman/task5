import Character from "./character";

class Magician extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}