/**
 * CharactersList component displays a list of characters.
 *
 * @component
 * @param {number} currentPage - The current page number.
 * @param {Character[]} [firstList] - The list of characters for the first page.
 * @returns {JSX.Element} The rendered CharactersList component.
 */

import { getCharacters } from '../lib/fetchData';
import { Character } from '../types/Character';
import СharacterСard from '../components/СharacterСard';

export default async function СharactersList({
  currentPage,
  firstList,
}: {
  currentPage: number;
  firstList?: Character[];
}) {
  const characters: Character[] =
    currentPage === 1 ? firstList : await getCharacters(currentPage);

  return (
    <div className="grow flex flex-wrap items-center justify-center gap-6 w-full">
      {characters.map((item) => (
        <СharacterСard key={item.id} character={item} />
      ))}
    </div>
  );
}
