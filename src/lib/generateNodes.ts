/**
 * Generates nodes and edges for ReactFlow component based on character, films, and starships data.
 *
 * @param {Character} character - The main character node.
 * @param {Film[]} films - The list of films associated with the character.
 * @param {StarShip[]} ships - The list of starships associated with the character.
 * @returns {Object} An object containing nodes and edges for the ReactFlow component.
 */

import { Edge } from '@/types/Edge';
import { Node } from '@/types/Node';
import { Character } from '@/types/Character';
import { Film } from '@/types/Film';
import { StarShip } from '@/types/StarShip';

export function generateNodes(
  character: Character,
  films: Film[],
  ships: StarShip[]
) {
  const nodes: Node[] = [
    {
      id: '1',
      type: 'character',
      data: character,
      position: { x: 30, y: 0 },
    },
  ];

  const edges: Edge[] = [];

  let filmY = 150;
  let starShipY = 150;
  let index = 2;

  // Sort films by episode ID
  films.sort((film1, film2) => film1.episode_id - film2.episode_id);

  films.forEach((film) => {
    // Add film node to nodes array
    nodes.push({
      id: `${index}`,
      type: 'film',
      data: film,
      position: { x: 100, y: filmY },
    });

    // Add edge between character node and film node
    edges.push({
      id: `e1-${index}`,
      source: '1',
      target: `${index}`,
    });

    const currentFilmIndex = index;
    index += 1;

    film.starships.forEach((ship) => {
      if (character.starships.includes(ship)) {
        // Find the starship details
        const starShip = ships.find((item) => item.id === ship);

        // If starship details are found, add starship node to nodes array
        if (starShip) {
          nodes.push({
            id: `${index}`,
            type: 'starShip',
            data: starShip,
            position: { x: 500, y: starShipY },
          });

          // Add edge between film node and starship node
          edges.push({
            id: `e${currentFilmIndex}-${index}`,
            source: `${currentFilmIndex}`,
            target: `${index}`,
          });
        }

        // Increment y position for the next starship node
        starShipY += 150;
        index += 1;
      }
    });

    // Increment y position for the next film node
    filmY += 180;
  });

  return { nodes, edges };
}
