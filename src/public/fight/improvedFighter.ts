import Fighter, {IFighter} from "./fighter";

export interface IFighterImproved extends IFighter{
  doubleHit: (enemy: IFighter, point: number) => void;
}

export default class ImprovedFighter extends Fighter implements IFighterImproved{
  doubleHit(enemy:IFighter, point: number): void {
    super.hit(enemy, point * 2);
  }
}
