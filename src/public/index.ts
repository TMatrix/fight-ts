import Fighter from "./fight/fighter";
import ImprovedFighter from "./fight/improvedFighter";
import fight from "./fight/fight";

let fighter = new Fighter("John", 100, 1);
let improvedFighter = new Fighter("Bobby", 110, 2) as ImprovedFighter;

fight(fighter, improvedFighter, 25, 13, 45);