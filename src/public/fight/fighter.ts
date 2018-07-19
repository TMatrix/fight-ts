export interface IFighter {
  name: string;
  health: number;
  power: number;
  setDamage(damage: number): void;
  hit(enemy: IFighter, point: number): void;
  knockout():Promise<{}>;
}

export default class Fighter implements IFighter {
  readonly name: string;
  health: number;
  readonly power: number;
  constructor(name: string, health: number, power: number) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  setDamage(damage: number): void {
    this.health -= damage;
    console.log(this.health);
  }

  hit(enemy: IFighter, point: number): void {
    let damage : number = point * this.power;
    enemy.setDamage(damage);
  }

  knockout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("time is over");
        resolve();
      }, 500);
    });
  }
}
