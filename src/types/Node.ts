import { Character } from './Character';
import { Film } from './Film';
import { StarShip } from './StarShip';

export interface Node {
  id: string;
  type: string;
  data: Character | Film | StarShip;
  position: { x: number; y: number };
}
