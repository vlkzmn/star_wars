/**
 * CardSkeleton component renders a skeleton placeholder for a card during loading.
 *
 * @component
 * @returns {JSX.Element} The rendered card skeleton component
 * @example
 * // Usage example:
 * <CardSkeleton />
 */

import { Stormtrooper } from './Stormtrooper';

function CardSkeleton(): JSX.Element {
  return (
    <div className="w-p18 min-w-48 opacity-10 animate-pulse">
      <div className="relative w-full pt-p56">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center h-1/56 bg-stone-700 rounded-t-lg">
          <Stormtrooper />
        </div>
      </div>

      <div className="h-20 p-3 mb-0.5 bg-stone-900">
        <div className="relative w-8 h-1 mt-1 my-1.5 mr-1.5 bg-stone-700 rounded-md after:absolute after:block after:left-9 after:w-2 after:h-1 after:content-'' after:bg-stone-700 after:rounded-md" />
        <div className="w-24 h-3 bg-stone-700 rounded-lg" />
      </div>
      <div className="relative h-4 bg-stone-900 rounded-b-lg after:absolute after:content-'' after:right-3 after:top-0 after:w-p34 after:h-full after:bg-black after:z-20 after:[clip-path:polygon(15%_0,_85%_0%,_100%_100%,_0_100%)]" />
    </div>
  );
}

/**
 * CardsListSkeleton component renders a list of skeleton placeholders for cards during loading.
 *
 * @component
 * @returns {JSX.Element} The rendered list of card skeletons
 * @example
 * // Usage example:
 * <CardsListSkeleton />
 */

export default function CardsListSkeleton(): JSX.Element {
  return (
    <div className="grow flex flex-wrap justify-center items-center gap-6 w-full">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
