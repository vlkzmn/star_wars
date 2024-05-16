import { Metadata } from 'next';
import { Suspense } from 'react';
import CharacterPage from '@/components/CharacterPage';
import Loading from '@/app/loading';
import { getCharacter } from '@/lib/fetchData';

type Props = {
  params: { id: string };
};

/**
 * Function to generate metadata for the character page.
 *
 * @param {Props} props - The props containing the character ID.
 * @returns {Promise<Metadata>} - The metadata for the character page.
 */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch the character data based on the ID
  const character = await getCharacter(params.id);

  // Set the title of the page to the name of the character
  return {
    title: character.name,
  };
}

/**
 * Curent Character Page Component
 *
 * This component represents a page displaying details of a specific character.
 * It includes a loading fallback while fetching the character data.
 *
 * @param {Object} props - The props of the component.
 * @param {Object} props.params - The parameters containing the ID of the character.
 * @param {string} props.params.id - The ID of the character.
 * @returns {JSX.Element} - The JSX markup for the component.
 */

export default async function Page({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  return (
    <Suspense key={params.id} fallback={<Loading />}>
      {/* Display the character page. 
      Moved into a separate component so that the loading placeholder is visible. 
      Because fetching metadata stops the loading placeholder. */}
      <CharacterPage id={params.id} />
    </Suspense>
  );
}
