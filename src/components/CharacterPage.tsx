/**
 * CharacterPage component fetches and displays detailed information about a character,
 * including their home world, films, and starships. It also displays a flow diagram
 * representing relationships between the character, films, and starships.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.id - The ID of the character to fetch and display
 * @returns {JSX.Element} The rendered component
 * @example
 * // Usage example:
 * <CharacterPage id={params.id} />
 */

import {
  getCharacter,
  getFilms,
  getHomeWorld,
  getStarShips,
} from '@/lib/fetchData';
import Flow from '@/components/Flow';
import BackToListButton from '@/components/BackToListButton';
import { generateNodes } from '@/lib/generateNodes';
import CharacterData from './CharacterData';
import dynamic from 'next/dynamic';

export default async function CharacterPage({ id }: { id: string }) {
  const character = await getCharacter(id);
  const homeWorld = await getHomeWorld(character.homeworld);
  const films = await getFilms(character.films);
  const ships = await getStarShips(character.starships);
  const { nodes, edges } = generateNodes(character, films, ships);

  const FlowNoSSR = dynamic(() => import('../components/Flow'), { ssr: false });

  return (
    <main className="flex flex-col md:flex-row gap-3">
      <div className="hidden md:flex md:w-1/4 rounded-lg flex-col justify-between gap-6 m-3 p-5 bg-stone-900">
        <CharacterData
          character={character}
          films={films}
          ships={ships}
          homeWorld={homeWorld}
        />

        <BackToListButton />
      </div>

      <div className="w-screen h-screen min-h-screen p-3 md:w-3/4">
        <FlowNoSSR nodes={nodes} edges={edges} />
      </div>
    </main>
  );
}
