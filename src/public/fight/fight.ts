import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

export default async function fight(fighter:Fighter, improvedFighter:ImprovedFighter, ...points: number[]) {
  // Check point value for valid data
  let pointSum = points.reduce((sum, current) => sum + current, 0);
  if (points.length == 0 || pointSum <= 0) {
    console.log("Incorrect point value");
    return;
  }

  //Players hits for each point value
  for (let point of points) {
    if (fighter.health >= 0 && improvedFighter.health >= 0) {
      fighter.hit(improvedFighter, point);
      improvedFighter.hit(fighter, point);
    } else {
      break;
    }
  }

  //Finishing of game process
  if (fighter.health < 0) {
    console.log(fighter.name + " in knockout");
    await fighter.knockout();
    console.log(`Player "${improvedFighter.name}" is a winner!`);
  } else if (improvedFighter.health < 0) {
    console.log(improvedFighter.name + " in knockout");
    await improvedFighter.knockout();
    console.log(`Player "${fighter.name}" is a winner!`);
  } else {
    console.log(`Game over!
                \n Player "${fighter.name}" has ${fighter.health} HP!
                \n Player "${improvedFighter.name}" has ${
      improvedFighter.health
    } HP!`);
  }
}
