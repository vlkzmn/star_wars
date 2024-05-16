/**
 * CharacterData component displays detailed information about a character,
 * including their attributes, films they appeared in, and starships they have piloted.
 *
 * @component
 * @param {Object} props - The component props
 * @param {Character} props.character - The character object containing details about the character
 * @param {Film[]} props.films - An array of films in which the character appeared
 * @param {StarShip[]} props.ships - An array of starships associated with the character
 * @param {string} props.homeWorld - The name of the character's home world
 * @example
 * // Usage example:
 * const character = { ... };
 * const films = [ ... ];
 * const ships = [ ... ];
 * const homeWorld = 'Tatooine';
 *
 * <CharacterData
 *   character={character}
 *   films={films}
 *   ships={ships}
 *   homeWorld={homeWorld}
 * />
 */

import { Character } from '../types/Character';
import { Film } from '../types/Film';
import { StarShip } from '../types/StarShip';

export default function CharacterData({
  character,
  films,
  ships,
  homeWorld,
}: {
  character: Character;
  films: Film[];
  ships: StarShip[];
  homeWorld: string;
}) {
  return (
    <>
      <h1 className="text-xl text-center">{character.name}</h1>

      <div className="flex flex-col gap-1.5 text-stone-400">
        <p>{`Height: ${character.height}`}</p>
        <p>{`Mass: ${character.mass}`}</p>
        <p>{`Hair color: ${character.hair_color}`}</p>
        <p>{`Skin color: ${character.skin_color}`}</p>
        <p>{`Eye color: ${character.eye_color}`}</p>
        <p>{`Birth year: ${character.birth_year}`}</p>
        <p>{`Gender: ${character.gender}`}</p>
        <p>{`Home World: ${homeWorld}`}</p>

        <ul className="list-disc">
          Appearances:
          {films.map((film) => (
            <li className="ml-6" key={film.id}>
              {film.title}
            </li>
          ))}
        </ul>

        {ships.length > 0 && (
          <ul className="list-disc">
            Star ships:
            {ships.map((ship) => (
              <li className="ml-6" key={ship.id}>
                {ship.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
