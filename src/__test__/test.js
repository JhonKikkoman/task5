import Character from "../character";
import Swordsman from "../swordsman";

test('checking name and type', () => {
    const character = new Character('Jhon', 'Swordsman');
    const result = {
        health: 100,
        level: 1,
        name: "Jhon",
        type: "Swordsman"
    }
    expect(character).toEqual(result);
});

test('checking-error name', () => {
    expect(() => {
        const character = new Character('J', 'Swordsman');
    }).toThrow();
});

test('checking-error type', () => {
    expect(() => {
        const character = new Character('Jhon', 'Archmage');
    }).toThrow();
});


describe('check method levelUp', () => {
    test('upgrade heros level', () => {
        const warrior = new Swordsman('heila', 'Swordsman');
        warrior.levelUp();
        const result = {
            name: 'heila',
            type: 'Swordsman',
            health: 100,
            level: 2,
            attack: 48,
            defence: 12
        }
        expect(warrior).toEqual(result);
    });
    test('health indicator zero', () => {
        expect(() => {
            const warrior = new Swordsman('heila', 'Swordsman');
            warrior.health = 0;
            warrior.levelUp();
        }).toThrow();
    })
});


describe('check method damage', () => {
    test('check health >= 0', () => {
        const warrior = new Swordsman('heila', 'Swordsman');
        warrior.damage(10);
        expect(warrior.health).not.toBe(0);
    })
    test('check damage', () => {
        const warrior = new Swordsman('heila', 'Swordsman');
        warrior.damage(10);
        const result = {
            attack: 40,
            defence: 10,
            health: 91,
            level: 1,
            name: "heila",
            type: "Swordsman"
        }
        expect(warrior).toEqual(result);
    });
});


