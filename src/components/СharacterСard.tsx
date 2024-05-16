/**
 * CharacterCard component renders a card for displaying character name and image.
 *
 * @component
 * @param {Object} props - The props of the component.
 * @param {Character} props.character - The character object containing information.
 * @returns {JSX.Element} The rendered CharacterCard component.
 * @example
 * // Usage example:
 * <CharacterCard character={ character_object } />
 */

import Image from 'next/image';
import Link from 'next/link';
import { Character } from '@/types/Character';

export default function СharacterСard({ character }: { character: Character }) {
  return (
    <div className="w-p18 min-w-48" role="card">
      <Link href={`/${character.id}`} className="group">
        <Image
          className="rounded-t-lg"
          src={`/characters/${character.id}.webp`}
          alt={character.name}
          width={400}
          height={224}
          priority
        />

        <div className="h-20 p-3 mb-0.5 bg-stone-900">
          <div
            className="group-hover:shadow-3xl group-hover:bg-white relative w-8 h-1 mt-1 my-1.5 bg-stone-500 
          rounded-md mr-1.5 after:absolute after:block after:left-9 after:w-2 after:h-1 after:content-'' after:bg-stone-500 after:rounded-md group-hover:after:shadow-3xl group-hover:after:bg-white"
          />
          {character.name}
        </div>
      </Link>

      <div className="relative h-4 rounded-b-lg bg-stone-900 after:absolute after:content-'' after:right-3 after:top-0 after:w-p34 after:h-5 after:bg-black after:[clip-path:polygon(15%_0,_85%_0%,_100%_100%,_0_100%)] after:z-10" />
    </div>
  );
}
