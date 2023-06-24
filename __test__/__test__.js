import Character from "../src/character";

test('checking name and type', () => {
    const character = new Character('Jhon', 'Swordsman');
    const result = {
        health: 100,
        level: 1,
        name: "Jhon",
        type: "Swordsman"
    }
    expect(character).toEqual(result);
})