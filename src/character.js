export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(`Некорректное: ${name}`);
    }
    const arr = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!arr.includes(type)) {
      throw new Error(`Ошибка: ${type}`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += (this.attack * 0.2);
      this.defence += (this.defence * 0.2);
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
